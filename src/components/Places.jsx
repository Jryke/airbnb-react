import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav.jsx'
import Thumbnail from './Thumbnail.jsx'
import '../styles/filters.css'
import '../styles/grid.css'

class Places extends React.Component {
	state = {
		user: {
			name: '',
			avatar: '',
			location: '',
			email: '',
			likes: []
		},
		places: [],
		types: [],
		organizeBy: [
			{
				name: 'Latest',
				value: 'latest'
			},{
				name: 'Price',
				value: 'price'
			},{
				name: 'Rating',
				value: 'rating'
			}
		],
		selectedOrganization: 'Latest',
		filters: {
			bedrooms: 0,
			type: 'All Types',
			price: 0,
			title: '',
		},
	}

	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API_URL}/places`).then(res => {
			let places = res.data
			axios.get(`${process.env.REACT_APP_API_URL}/types`).then(res => {
				let types = res.data
				let token = localStorage.getItem('token')
				axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
					token: token
				}).then(res => {
					let user = res.data
					 console.log(user)
					this.setState({places, types, user})
				})
			})
		}).catch(err => console.log(err))
	}

	setBedroomsFilter = (e) => {
		let selectedRooms = e.target.value
		this.setState({
			filters: {
				bedrooms: selectedRooms,
				type: this.state.filters.type,
				price: this.state.filters.price,
				title: this.state.filters.title,
			}
		},
		this.populatePlaces)
	}

	setTypeFilter = (e) => {
		let selectedType = e.target.value
		this.setState({
			filters: {
				bedrooms: this.state.filters.bedrooms,
				type: selectedType,
				price: this.state.filters.price,
				title: this.state.filters.title,
			}
		},
		this.populatePlaces)
	}

	setPriceFilter = (e) => {
		let selectedPrice = e.target.value
		this.setState({
			filters: {
				bedrooms: this.state.filters.bedrooms,
				type: this.state.filters.type,
				price: selectedPrice,
				title: this.state.filters.title,
			}
		},
		this.populatePlaces)
	}

	setNameFilter = (e) => {
		let inputValue = e.target.value
		this.setState({
			filters: {
				rooms: this.state.filters.rooms,
				type: this.state.filters.type,
				price: this.state.filters.price,
				title: inputValue
			}
		})
	}

	populatePlaces = () => {
		// access filter values in state, use them to set express queries
		let filtersArr = []
		if (this.state.filters.bedrooms > 0) {
			filtersArr.push(`min_rooms=${this.state.filters.bedrooms}`)
		}
		if (this.state.filters.type !== 'All Types') {
			filtersArr.push(`type=${this.state.filters.type}`)
		}
		if (this.state.filters.price > 0) {
			filtersArr.push(`max_price=${this.state.filters.price}`)
		}
		// create single query for all filters to use with express
		let query = ''
		if (filtersArr.length === 1) {
			query = `?${filtersArr[0]}`
		} else if (filtersArr.length > 1) {
			query = `?${filtersArr[0]}`
			filtersArr.slice(1).forEach(filter => query = query + `&${filter}`)
		}
		// make query, set state with response
		axios.get(`${process.env.REACT_APP_API_URL}/places${query}`)
			.then(res => {
				this.setState({
					places: res.data
				})
			})
			.catch(err => console.log(err))
	}

	filterPlaces = () => {
		let filteredPlaces = this.state.places.slice()
		if (this.state.filters.title) {
			filteredPlaces = filteredPlaces.filter(place => place.title.toLowerCase().includes(this.state.filters.title.toLowerCase()))
		}
		return filteredPlaces
	}

	setOrganizeBy = (e) => {
		let selected = e.target.value
		this.setState({
			selectedOrganization : selected
		})
	}

	sortPlaces = () => {
		if (this.state.selectedOrganization === 'price') {
			return this.filterPlaces().sort((a,b) => a.price < b.price ? -1 : a.price > b.price ? 1 : 0)
		} else if (this.state.selectedOrganization === 'rating') {
			return this.filterPlaces().sort((a,b) => b.rating - a.rating)
		} else {
			return this.filterPlaces()
		}
	}
	
	renderLike = (placeId) => this.state.user.likes.includes(placeId) ? 'fas' : 'far'

	toggleLike = (e, placeId) => {
		e.preventDefault()
		let token = localStorage.getItem('token')
		axios.patch(`${process.env.REACT_APP_API_URL}/users/${token}`, {
			likes: placeId
		}).then(res => {
			let user = res.data
			this.setState({user})
		})
	}

	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div className="filters">
					<select onChange={(e) => this.setBedroomsFilter(e)}>
						<option value='0'>Rooms:</option>
						{[...Array(10)].map((n, i) => <option value={i + 1} key={i}>Rooms: {i + 1}</option>)}
					</select>
					<select onChange={(e) => this.setTypeFilter(e)}>
						<option value=''>All Types</option>
						{this.state.types.map((type, i) => <option key={i} value={type._id}>{type.name}</option>)}
					</select>
					<input type="number" placeholder="max price" onChange={(e) => this.setPriceFilter(e)}/>
					<select onChange={(e) => this.setOrganizeBy(e)}>
						{this.state.organizeBy.map((option, i) => <option value={option.value} key={i}>{option.name}</option>)}
					</select>
					<input type="text" className="search" placeholder="Search..." onChange={(e) => this.setNameFilter(e)} value={this.state.inputValue}/>
				</div>
				<div className="grid five large">
					{this.sortPlaces().map((place, i) => <Link className="card link" to={`/Place/${place._id}`} key={i}><Thumbnail info={place} renderLike={this.renderLike} toggleLike={this.toggleLike} index={i} /></Link>)}
				</div>
			</>
		)
	}
}

export default Places

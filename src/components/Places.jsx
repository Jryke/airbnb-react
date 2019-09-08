import React from 'react'
import Nav from './Nav.jsx'
import Thumbnail from './Thumbnail.jsx'
import '../styles/filters.css'
import '../styles/grid.css'

class Places extends React.Component {
	state = {
		user: {
			name: 'Tony',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		},
		info: [
			{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 3,
				price: 1000,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false,
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Shared Villa',
				rooms: 5,
				price: 550,
				reviews: 37,
				rating: 4,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: true
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire House',
				rooms: 7,
				price: 600,
				reviews: 37,
				rating: 1,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Shared House',
				rooms: 4,
				price: 200,
				reviews: 37,
				rating: 3,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Shared Villa',
				rooms: 10,
				price: 400,
				reviews: 37,
				rating: 4,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: true
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Private Room',
				rooms: 1,
				price: 100,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire House',
				rooms: 6,
				price: 750,
				reviews: 37,
				rating: 1,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Shared Villa',
				rooms: 2,
				price: 650,
				reviews: 37,
				rating: 4,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 9,
				price: 900,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire House',
				rooms: 7,
				price: 800,
				reviews: 37,
				rating: 1,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Shared House',
				rooms: 8,
				price: 250,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Shared Villa',
				rooms: 3,
				price: 350,
				reviews: 37,
				rating: 2,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			}
		],
		types: [
			'All Types',
			'Entire Villa',
			'Shared Villa',
			'Entire House',
			'Shared House',
			'Private Room'
		],
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
			rooms: 0,
			type: 'All Types',
			price: 0,
			name: '',
		},
	}

	setRoomsFilter = (e) => {
		let selectedRooms = e.target.value
		this.setState({
			filters: {
				rooms: selectedRooms,
				type: this.state.filters.type,
				price: this.state.filters.price,
				name: this.state.filters.name
			}
		})
	}

	setTypeFilter = (e) => {
		let selectedType = e.target.value
		this.setState({
			filters: {
				rooms: this.state.filters.rooms,
				type: selectedType,
				price: this.state.filters.price,
				name: this.state.filters.name
			}
		})
	}

	setPriceFilter = (e) => {
		let selectedPrice = e.target.value
		this.setState({
			filters: {
				rooms: this.state.filters.rooms,
				type: this.state.filters.type,
				price: selectedPrice,
				name: this.state.filters.name
			}
		})
	}

	setNameFilter = (e) => {
		let inputValue = e.target.value
		this.setState({
			filters: {
				rooms: this.state.filters.rooms,
				type: this.state.filters.type,
				price: this.state.filters.price,
				name: inputValue
			}
		})
	}

	filterAll = () => {
		let filteredPlaces = this.state.info.map(el => el)
		if (this.state.filters.name) {
			filteredPlaces = filteredPlaces.filter(place => place.name.toLowerCase().includes(this.state.filters.name.toLowerCase()))
		}
		if (this.state.filters.rooms > 0) {
			filteredPlaces = filteredPlaces.filter(place => place.rooms >= this.state.filters.rooms)
		}
		if (this.state.filters.type !== 'All Types') {
			filteredPlaces = filteredPlaces.filter(place => place.type === this.state.filters.type)
		}
		if (this.state.filters.price > 0) {
			filteredPlaces = filteredPlaces.filter(place => place.price <= this.state.filters.price)
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
			return this.filterAll().sort((a,b) => a.price < b.price ? -1 : a.price > b.price ? 1 : 0)
		} else if (this.state.selectedOrganization === 'rating') {
			return this.filterAll().sort((a,b) => b.rating - a.rating)
		} else {
			return this.filterAll()
		}
	}

	toggleLike = (e, i) => {
		e.preventDefault()
		let place = this.state.info[i]
		place.liked = !place.liked
		this.setState({place})
	}

	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div className="filters">
					<select onChange={(e) => this.setRoomsFilter(e)}>
						<option>Rooms:</option>
						{[...Array(10)].map((n, i) => <option value={i + 1} key={i}>Rooms: {i + 1}</option>)}
					</select>
					<select onChange={(e) => this.setTypeFilter(e)}>
						{this.state.types.map((type, i) => <option key={i}>{type}</option>)}
					</select>
					<input type="number" placeholder="max price" onChange={(e) => this.setPriceFilter(e)}/>
					<select onChange={(e) => this.setOrganizeBy(e)}>
						{this.state.organizeBy.map((option, i) => <option value={option.value} key={i}>{option.name}</option>)}
					</select>
					<input type="text" className="search" placeholder="Search..." onChange={(e) => this.setNameFilter(e)} value={this.state.inputValue}/>
				</div>
				<div className="grid five large">
					{this.sortPlaces().map((place, i) => <Thumbnail info={place} toggleLike={this.toggleLike} index={i} key={i}/>)}
				</div>
			</>
		)
	}
}

export default Places

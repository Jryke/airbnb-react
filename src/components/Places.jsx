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
				price: 350,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false,
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 5,
				price: 350,
				reviews: 37,
				rating: 4,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: true
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				rating: 1,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 1,
				price: 350,
				reviews: 37,
				rating: 3,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 10,
				price: 350,
				reviews: 37,
				rating: 4,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: true
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 4,
				price: 350,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 6,
				price: 350,
				reviews: 37,
				rating: 1,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 2,
				price: 350,
				reviews: 37,
				rating: 4,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 9,
				price: 350,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				rating: 1,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 8,
				price: 350,
				reviews: 37,
				rating: 5,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
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
				value: 'date'
			},{
				name: 'Price',
				value: 'price'
			},{
				name: 'Rating',
				value: 'rating'
			}
		],
		filters: {
			rooms: 0,
			type: 'All Types',
			price: 0,
			name: '',
		}
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
					<select>
						{this.state.organizeBy.map((option, i) => <option value="option.value" key={i}>{option.name}</option>)}
					</select>
					<input type="text" className="search" placeholder="Search..." onChange={(e) => this.setNameFilter(e)} value={this.state.inputValue}/>
				</div>
				<div className="grid five large">
					{this.filterAll().map((place, i) => <Thumbnail info={place} toggleLike={this.toggleLike} index={i} key={i}/>)}
				</div>
			</>
		)
	}
}

export default Places

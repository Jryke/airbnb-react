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
		inputValue: '',
	}

	setInputValue = (e) => {
		let searchText = e.target.value
		this.setState({
			inputValue: searchText
		})
	}

	filterPlaces = () => this.state.info.filter(place => place.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))

	filterByRooms = (e) => {
		let filteredRooms = this.state.info.filter(place => place.rooms === Number(e.target.value))
		console.log(filteredRooms)
		console.log(e.target)
		return filteredRooms
	}

	filter = (places, filter) => {

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
					<select onChange={(e) => this.filterByRooms(e)}>
						<option>Rooms:</option>
						{[...Array(10)].map((n, i) => <option value={i + 1} key={i}>Rooms: {i + 1}</option>)}
					</select>
					<select>
						{this.state.types.map((type, i) => <option value="1" key={i}>{type}</option>)}
					</select>
					<input type="number" placeholder="max price" />
					<select>
						{this.state.organizeBy.map((option, i) => <option value="option.value" key={i}>{option.name}</option>)}
					</select>
					<input type="text" className="search" placeholder="Search..." onChange={(e) => this.setInputValue(e)} value={this.state.inputValue}/>
				</div>
				<div className="grid five large">
					{this.filterPlaces().map((place, i) => <Thumbnail info={place} toggleLike={this.toggleLike} index={i} key={i}/>)}
				</div>
			</>
		)
	}
}

export default Places

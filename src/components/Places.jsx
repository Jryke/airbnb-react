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
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			}
		]
	}
	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div className="filters">
					<select>
						<option value="1">Rooms: 1</option>
						<option value="1">Rooms: 2</option>
						<option value="1">Rooms: 3</option>
						<option value="1">Rooms: 4</option>
						<option value="1">Rooms: 5</option>
						<option value="1">Rooms: 6</option>
						<option value="1">Rooms: 7</option>
						<option value="1">Rooms: 8</option>
						<option value="1">Rooms: 9</option>
						<option value="1">Rooms: 10</option>
					</select>
					<select>
						<option value="1">All Types</option>
						<option value="1">Entire Villa</option>
						<option value="1">Shared Villa</option>
						<option value="1">Entire House</option>
						<option value="1">Shared House</option>
						<option value="1">Private Room</option>
					</select>
					<input type="number" placeholder="max price" />
					<select>
						<option value="date">Latest</option>
						<option value="price">Price</option>
						<option value="rating">Rating</option>
					</select>
					<input type="text" className="search" placeholder="Search..." />
				</div>
				<div class="grid five large">
					{this.state.info.map(place => <Thumbnail info={place} />)}
				</div>
			</>
		)
	}
}

export default Places

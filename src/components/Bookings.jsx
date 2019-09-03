import React from 'react'
import Nav from './Nav.jsx'
import Sidebar from './Sidebar.jsx'
import Thumbnail from './Thumbnail.jsx'
import '../styles/grid.css'
import '../styles/sidebar.css'

class Bookings extends React.Component {
	state = {
		user: {
			name: 'Tony',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		},
		upcomingTrips: {
			name: 'Luxury Villa Indu Siam',
			type: 'Entire Villa',
			rooms: 3,
			nights: 5,
			price: 350,
			reviews: 37,
			location: 'Koh Samui, Thailand',
			img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
		},
		pastTrips: [
			{
				name: 'Villa Kelusa',
				type: 'Entire Villa',
				rooms: 6,
				nights: 3,
				price: 190/3,
				reviews: 18,
				location: 'Bali, Indonesia',
				img: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg'
			},{
				name: 'Tropical Architecture',
				type: 'Private Room',
				rooms: 1,
				nights: 9,
				price: 2980/9,
				reviews: 290,
				location: 'Koh Samui, Thailand',
				img: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg'
			}
		],
		currentPage: 'bookings'
	}
	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div class="grid medium">
					<div class="grid sidebar-left">
						<Sidebar currentPage={this.state.currentPage}/>
						<div class="content">
							<h2>Upcoming Trips</h2>
							<div class="grid two">
								<Thumbnail info={this.state.upcomingTrips} />
							</div>
							<h2>Past Trips</h2>
							<div class="grid two">
							{this.state.pastTrips.map((place, i) => <Thumbnail key={i} info={place} />)}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Bookings

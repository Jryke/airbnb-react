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
		trips: [
			{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 3,
				nights: 5,
				price: 350,
				reviews: 37,
				location: 'Koh Samui, Thailand',
				dates: '10 Aug 2020 - 15 Aug 2020',
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: true
			},{
				name: 'Villa Kelusa',
				type: 'Entire Villa',
				rooms: 6,
				nights: 3,
				price: 190/3,
				reviews: 18,
				location: 'Bali, Indonesia',
				dates: '01 May 2019 - 04 May 2019',
				img: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg',
				liked: false
			},{
				name: 'Tropical Architecture',
				type: 'Private Room',
				rooms: 1,
				nights: 9,
				price: 2980/9,
				reviews: 290,
				location: 'Koh Samui, Thailand',
				dates: '18 April 2019 - 27 April 2019',
				img: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg',
				liked: true
			}
		],
		currentPage: 'bookings'
	}

	toggleLike = (e, i) => {
		e.preventDefault()
		let place = this.state.trips[i]
		place.liked = !place.liked
		this.setState({place})
	}

	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar currentPage={this.state.currentPage}/>
						<div className="content">
							<h2>Upcoming Trips</h2>
							<div className="grid two">
								{this.state.trips.map((trip, i) => i === 0 ? <Thumbnail info={trip} toggleLike={this.toggleLike} index={i} key={i}/> : null)}
							</div>
							<h2>Past Trips</h2>
							<div className="grid two">
							{this.state.trips.map((place, i) => i === 0 ? null : <Thumbnail info={place} toggleLike={this.toggleLike} index={i} key={i}/>)}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Bookings

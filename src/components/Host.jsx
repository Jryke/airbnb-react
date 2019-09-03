import React from 'react'
import Nav from './Nav.jsx'
import Sidebar from './Sidebar.jsx'
import Thumbnail from './Thumbnail.jsx'
import {Link} from 'react-router-dom'
import '../styles/grid.css'
import '../styles/sidebar.css'
import '../styles/buttons.css'


class Host extends React.Component {
	state = {
		user: {
			name: 'Tony',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		},
		hosted: [
			{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				guests: 10,
				price: 350,
				reviews: 37,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},{
				name: 'Dreamy Tropical Tree House',
				type: 'Entire House',
				rooms: 1,
				guests: 10,
				price: 120,
				reviews: 127,
				img: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg'
			},
		],
		currentPage: 'host'
	}
	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar currentPage={this.state.currentPage}/>
						<div className="content">
							<Link className="button primary" to="/create">Host new place</Link>
							<hr />
							<h2>Places I'm hosting</h2>
							<div className="grid two">
								{this.state.hosted.map((place, i) => <Thumbnail info={place} key={i} />)}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Host

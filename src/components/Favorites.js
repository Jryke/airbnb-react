import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'

class Favorites extends React.Component {
	state = {
		user: {
			name: 'Tony',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		},
		place: {
			name: 'Luxury Villa Indu Siam',
			type: 'Entire Villa',
			rooms: 7,
			guests: 10,
			price: 350,
			reviews: 37,
			img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
		}
	}
	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div className="grid medium">
					<div className="grid sidebar-left">
					<Sidebar />
					<div className="content">
						<h2>My Favorites</h2>
						<div className="grid two">
							<Thumbnail info={this.state.place} />
						</div>
					</div>
					</div>
				</div>
			</>
		)
	}
}

export default Favorites

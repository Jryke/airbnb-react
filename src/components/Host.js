import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'

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
		]
	}
	render() {
		return(
			<>
				<Nav user={this.state.user} />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar />
						<div className="content">
							<a className="button primary" href="create.html">Host new place</a>
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

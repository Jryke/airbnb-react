import React from 'react'
import axios from 'axios'
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
			name: '',
			avatar: '',
			location: '',
			email: ''
		},
		hosted: [
			{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				guests: 10,
				price: 350,
				reviews: 37,
				rating: 3,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				liked: false
			},{
				name: 'Dreamy Tropical Tree House',
				type: 'Entire House',
				rooms: 1,
				guests: 10,
				price: 120,
				reviews: 127,
				rating: 2,
				img: 'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg',
				liked: true
			},
		],
		currentPage: 'host'
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
		axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
			token: token
		}).then(res => {
			this.setState({
				user: res.data
			})
		})
	}

	toggleLike = (e, i) => {
		e.preventDefault()
		let place = this.state.hosted[i]
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
							<Link className="button primary" to="/create">Host new place</Link>
							<hr />
							<h2>Places I'm hosting</h2>
							<div className="grid two">
								{this.state.hosted.map((place, i) => <Thumbnail info={place} toggleLike={this.toggleLike} index={i} key={i} />)}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Host

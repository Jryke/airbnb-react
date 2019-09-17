import React from 'react'
import axios from 'axios'
import Nav from './Nav.jsx'
import Sidebar from './Sidebar.jsx'
import Thumbnail from './Thumbnail.jsx'
import '../styles/grid.css'
import '../styles/sidebar.css'

class Favorites extends React.Component {
	state = {
		user: {
			name: '',
			avatar: '',
			location: '',
			email: ''
		},
		info: [
			{
				name: 'Luxury Villa Indu Siam',
				type: 'Entire Villa',
				rooms: 7,
				guests: 10,
				price: 350,
				reviews: 37,
				rating: 4,
				img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			}
		],
		currentPage: 'favorites'
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
		let place = this.state.info[i]
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
						<h2>My Favorites</h2>
						<div className="grid two">
							{this.state.info.map((place, i) => <Thumbnail info={place} toggleLike={this.toggleLike} index={i} key={i} />)}
						</div>
					</div>
					</div>
				</div>
			</>
		)
	}
}

export default Favorites

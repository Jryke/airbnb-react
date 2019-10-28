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
			email: '',
			likes: []
		},
		favorites: [],
		currentPage: 'favorites'
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
		axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
			token: token
		}).then(res => {
			let user = res.data
			axios.get(`${process.env.REACT_APP_API_URL}/places`)
			.then(res => {
				let places = res.data
				console.log(places)
				console.log(user.likes)
				let favorites = places.filter(place => user.likes.includes(place._id))
				console.log(favorites)
				this.setState({user, favorites})
			})
		})
	}

	renderLike = (placeId) => this.state.user.likes.includes(placeId) ? 'fas' : 'far'

	toggleLike = (e, placeId) => {
		e.preventDefault()
		let token = localStorage.getItem('token')
		axios.patch(`${process.env.REACT_APP_API_URL}/users/${token}`, {
			likes: placeId
		}).then(res => {
			let user = res.data
			this.setState({user})
		})
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
							{this.state.favorites.map((place, i) => <Thumbnail info={place} renderLike={this.renderLike} toggleLike={this.toggleLike} index={i} key={i} />)}
						</div>
					</div>
					</div>
				</div>
			</>
		)
	}
}

export default Favorites

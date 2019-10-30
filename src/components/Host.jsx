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
		user: {},
		hosted: [],
		currentPage: 'host'
	}
	componentWillMount() {
		let token = localStorage.getItem('token')
		axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
			token: token
		}).then(res => {
			let user = res.data
			axios.get(`${process.env.REACT_APP_API_URL}/places/?host=${user._id}`)
				.then(res => {
					let hosted = res.data
					this.setState({user, hosted})
				})
		}).catch(err => console.log(err))
	}
	renderHosted = () => {
		if (this.state.hosted.length > 0) {
			return this.state.hosted.map((place, i) => <Thumbnail info={place} renderLike={this.renderLike} toggleLike={this.toggleLike} index={i} key={i} />)
		}
	}
	renderLike = (placeId) => this.state.user.likes.includes(placeId) ? 'fas' : 'far'
	toggleLike = (e, placeId) => {
		e.preventDefault()
		let token = localStorage.getItem('token')
		axios.patch(`${process.env.REACT_APP_API_URL}/likes/${token}`, {
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
							<Link className="button primary" to="/create">Host new place</Link>
							<hr />
							<h2>Places I'm hosting</h2>
							<div className="grid two">
								{this.renderHosted()}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Host

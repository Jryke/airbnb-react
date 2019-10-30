import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav.jsx'
import Sidebar from './Sidebar.jsx'
import '../styles/grid.css'
import '../styles/sidebar.css'
import '../styles/forms.css'
import '../styles/buttons.css'

class Profile extends React.Component {
	state = {
		user: {
			name: '',
			email: '',
			location: '',
			avatar: ''
		},
		currentPage: 'profile'
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

	sendInputToState = (e, input) => {
		let user = this.state.user
		user[input] = e.target.value
		this.setState({user})
	}

	getFile = (e) => {
		let user = this.state.user
		user.avatar = e.target.files[0]
		this.setState({user})
	}

	submitForm = (e) => {
		e.preventDefault()
		let formData = new FormData()
		formData.append('name', this.state.user.name)
		formData.append('email', this.state.user.email)
		formData.append('location', this.state.user.location)
		formData.append('avatar', this.state.user.avatar)
		let token = localStorage.getItem('token')
		axios.patch(`${process.env.REACT_APP_API_URL}/user/${token}`, formData)
		.then(res => {
			let user = res.data
			this.setState({user})
		})
	}

	logout = () => {
		localStorage.removeItem('token')
	}

	render(){
		return(
			<>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar currentPage={this.state.currentPage}/>
						<div className="content">
							<h2>My Profile</h2>
							<form onSubmit={this.submitForm}>
								<div className="group">
									<label>Name</label>
									<input type="text" defaultValue={this.state.user.name} onChange={(e) => this.sendInputToState(e, 'name')} />
								</div>
								<div className="group">
									<label>Email</label>
									<input type="email" defaultValue={this.state.user.email} onChange={(e) => this.sendInputToState(e, 'email')} />
								</div>
								<div className="group">
									<label>Location</label>
									<input type="text" defaultValue={this.state.user.location} onChange={(e) => this.sendInputToState(e, 'location')} />
								</div>
								<div className="group">
									<label>Profile Picture</label>
									<div className="user">
										<div className="avatar" style={{backgroundImage: `url(${this.state.user.avatar})`}}></div>
										<div className="name">
											<input type="file" onChange={this.getFile} />
										</div>
									</div>
								</div>
								<button>Save Changes</button>
							</form>
							<hr />
							<Link to="/login"><button className="secondary" onClick={this.logout}>Logout</button></Link>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Profile

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

	render(){
		return(
			<>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar currentPage={this.state.currentPage}/>
						<div className="content">
							<h2>My Profile</h2>
							<form>
								<div className="group">
									<label>Name</label>
									<input type="text" defaultValue={this.state.user.name} />
								</div>
								<div className="group">
									<label>Email</label>
									<input type="email" defaultValue={this.state.user.email} />
								</div>
								<div className="group">
									<label>Location</label>
									<input type="text" defaultValue={this.state.user.location} />
								</div>
								<div className="group">
									<label>Profile Picture</label>
									<div className="user">
										<div className="avatar" style={{backgroundImage: `url(${this.state.user.avatar})`}}></div>
										<div className="name">
											<input type="file" />
										</div>
									</div>
								</div>
								<button>Save Changes</button>
							</form>
							<hr />
							<Link to="/login"><button className="secondary">Logout</button></Link>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Profile

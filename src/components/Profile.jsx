import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav.jsx'
import Sidebar from './Sidebar.jsx'
import '../styles/grid.css'
import '../styles/sidebar.css'
import '../styles/forms.css'
import '../styles/buttons.css'

class Profile extends React.Component {
	state = {
		user: {
			name: 'Tony',
			email: 'tony@tortugacoders.com',
			location: 'Thailand',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		},
		currentPage: 'profile'
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
									<input type="email" value={this.state.user.email} />
								</div>
								<div className="group">
									<label>Location</label>
									<input type="text" value={this.state.user.location} />
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

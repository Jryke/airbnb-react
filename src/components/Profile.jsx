import React from 'react'
import Nav from './Nav.jsx'
import Sidebar from './Sidebar.jsx'

class Profile extends React.Component {
	state = {
		user: {
			name: 'Tony',
			email: 'tony@tortugacoders.com',
			location: 'Thailand',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		}
	}
	render(){
		return(
			<>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar />
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
							<button className="secondary">Logout</button>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Profile

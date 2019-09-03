import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/sidebar.css'

class Sidebar extends React.Component {
	render() {
		return(
			<div className="sidebar">
				<ul>
					<li className="active">
						<Link to="/Profile">Profile</Link>
					</li>
					<li className="">
						<Link to="/Bookings">Bookings</Link>
					</li>
					<li className="">
						<Link to="/Favorites">Favorites</Link>
					</li>
					<li className="">
						<Link to="/Host">Host</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Sidebar

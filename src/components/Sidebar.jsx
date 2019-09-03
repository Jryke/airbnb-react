import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/sidebar.css'

class Sidebar extends React.Component {
	setActive = (link) => this.props.currentPage === link ?'active' :''

	render() {
		return(
			<div className="sidebar">
				<ul>
					<li className={this.setActive('profile')}>
						<Link to="/Profile">Profile</Link>
					</li>
					<li className={this.setActive('bookings')}>
						<Link to="/Bookings">Bookings</Link>
					</li>
					<li className={this.setActive('favorites')}>
						<Link to="/Favorites">Favorites</Link>
					</li>
					<li className={this.setActive('host')}>
						<Link to="/Host">Host</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Sidebar

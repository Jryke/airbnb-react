import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/nav.css'
import '../styles/buttons.css'

class Nav extends React.Component {
	render() {
		return(
			<nav>
				<Link to="/Places" className="logo" style={{backgroundImage: "url('./images/logo-airbnb.png')"}}></Link>
				<div className="profile">
					<Link to="profile.html" className="button">
						<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/men/9.jpg')"}}></div>
						<span>{this.props.user.name}</span>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Nav

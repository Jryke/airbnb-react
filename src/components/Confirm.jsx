import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav.jsx'
import Thumbnail from './Thumbnail.jsx'
import '../styles/grid.css'
import '../styles/forms.css'
import '../styles/buttons.css'

class Confirm extends React.Component {
	state = {
		user: {
			name: 'Tony',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		},
		place: {
			name: 'Luxury Villa Indu Siam',
			type: 'Entire Villa',
			rooms: 7,
			guests: 10,
			price: 350,
			reviews: 37,
			rating: 4,
			img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
		},
		dates: {
			from: "12/11/2019",
			to: "15/11/2019",
			nights: 3
		}
	}

	toggleLike = (e) => {
		e.preventDefault()
		let place = this.state.place
		place.liked = !place.liked
		this.setState({place})
	}

	render() {
		return(
			<>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">

					<div className="sidebar">
						<Thumbnail info={this.state.place} toggleLike={this.toggleLike}/>
					</div>


						<div className="content">
							<h2>Confirm Booking</h2>
							<form>
								<div className="group">
									<label>From</label>
									<input type="text" defaultValue={this.state.dates.from} />
								</div>
								<div className="group">
									<label>To</label>
									<input type="text" defaultValue={this.state.dates.to} />
								</div>
								<div className="group">
									<label>Guests</label>
									<select>
										{[...Array(this.state.place.guests)].map((n, i) => <option key={i}>{i === 0 ?'1 guest' :`${i + 1} guests`}</option>)}
									</select>
								</div>
								<div className="group">
									<label>Total: {this.state.dates.nights} nights</label>
									<h2>${this.state.dates.nights * this.state.place.price}</h2>
								</div>
								<Link to="/bookings"><button className="primary">Confirm</button></Link>
							</form>
							<hr />
							<Link to="/places"><button>Cancel</button></Link>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Confirm

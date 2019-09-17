import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Elements, StripeProvider} from 'react-stripe-elements'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import Nav from './Nav.jsx'
import Thumbnail from './Thumbnail.jsx'
import StripeForm from './StripeForm.jsx'
import '../styles/grid.css'
import '../styles/forms.css'
import '../styles/buttons.css'
import '../styles/cards.css'

class Confirm extends React.Component {
	state = {
		user: {
			name: '',
			avatar: '',
			location: '',
			email: ''
		},
		place: {
			amenities: [],
			host: {},
			images: [],
			reviews: [],
			type: {}
		},
		dates: {},
		guests: 0
	}

	componentWillMount() {
		let dates = this.props.location.dates
		let guests = this.props.location.guests
		let place = this.props.location.place
		place.image = place.images[0]
		delete place.images
		let token = localStorage.getItem('token')
		axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
			token: token
		}).then(res => {
			let user = res.data
			this.setState({user, dates, guests, place})
		})
	}

	handleChange = (date, field) => {
		let dates = this.state.dates
		dates[field] = date
		this.setState({dates})
	}

	setGuestsDefault = () => {
		if (this.state.guests === 1) {
			return '1 guest'
		} else {
			return `${this.state.guests} guests`
		}
	}

	setDuration = () => {
		let arrival = this.state.dates.startDate
		let departure = this.state.dates.endDate
		return moment.duration(moment(departure).diff(moment(arrival))).as('days').toFixed()
	}

	toggleLike = (e) => {
		e.preventDefault()
		console.log(this.props.location)
		let place = this.state.place
		place.liked = !place.liked
		this.setState({place})
	}

	setAmount = () => this.setDuration() * this.state.place.price

	cancelConfirm = (e) => {
		e.preventDefault()
		this.props.history.goBack()
	}

	render() {
		return(
			<>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">
					<div className="sidebar">
						<Link className="card link" to={`/Place/${this.state.place._id}`}>
							<Thumbnail info={this.state.place} toggleLike={this.toggleLike}/>
						</Link>
					</div>
						<div className="content">
							<h2>Confirm Booking</h2>
							<form>
								<div className="group">
									<label>From</label>
									<DatePicker selected={this.state.dates.startDate} onChange={(e) => this.handleChange(e, 'startDate')} />
								</div>
								<div className="group">
									<label>To</label>
									<DatePicker selected={this.state.dates.endDate} onChange={(e) => this.handleChange(e, 'endDate')} />
								</div>
								<div className="group">
									<label>Guests</label>
									<select defaultValue={this.setGuestsDefault()}>
										{[...Array(this.state.place.guests)].map((n, i) => <option key={i}>{i === 0 ?'1 guest' :`${i + 1} guests`}</option>)}
									</select>
								</div>
								<div className="group">
									<label>Total: {this.setDuration()} nights</label>
									<h2>${this.setAmount()}</h2>
								</div>
								<Link to="/bookings"><button className="primary">Confirm</button></Link>
							</form>
							<hr />
							<button onClick={this.cancelConfirm}>Cancel</button>
						</div>
					</div>
				</div>
				<StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
					<div className="stripe-form">
						<Elements>
							<StripeForm amount={this.setAmount()} description={this.state.place.title} />
						</Elements>
					</div>
				</StripeProvider>

			</>
		)
	}
}

export default Confirm

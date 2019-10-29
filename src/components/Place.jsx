import React from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import Nav from './Nav.jsx'
import Gallery from './Gallery.jsx'
import Review from './Review.jsx'
import "react-datepicker/dist/react-datepicker.css"
import '../styles/filters.css'
import '../styles/grid.css'
import '../styles/buttons.css'
import '../styles/icons.css'
import '../styles/reviews.css'
import '../styles/users.css'

class Place extends React.Component {
	state = {
		user: {
			name: '',
			avatar: '',
			location: '',
			email: '',
			likes: []
		},
		placeInfo: {
			images: [],
			amenities: [],
			type: {},
			host: {},
			reviews: [],
			rating: 0
		},
		review:{
			text: '',
			rating: 0
		},
		selected: '',
		dates: {
			startDate: null,
			endDate: null
		},
		buttonDisabled: true,
		guests: 0,
		reviewInput: true
	}

	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API_URL}/places/${this.props.match.params.id}`)
			.then(res => {
				let placeInfo = res.data
				placeInfo.reviews.reverse()
				placeInfo.rating = Math.round(placeInfo.reviews.map(review => review.rating).reduce((a,b) => a + b) / placeInfo.reviews.length)
				let selected = res.data.images[0]
				let token = localStorage.getItem('token')
				axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
					token: token
				}).then(res => {
					let user = res.data
					let reviewersIds = placeInfo.reviews.map(review => review.author._id)
					let reviewInput
					reviewersIds.includes(user._id) ? reviewInput = false : reviewInput = true
					this.setState({user, placeInfo, selected, reviewInput})
				})
			})
			.catch(err => console.log(err))
	}

	changeSelected = (newSelected) => {
		this.setState({
			selected: newSelected
		})
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

	setReview = (e) => {
		let newReview = e.target.value
		this.setState({
			review: {
				text: newReview,
				rating: this.state.review.rating
			}
		})
	}

	setRating = (index) => {
		let ratingNumber = index + 1
		this.setState({
			review: {
				text: this.state.review.text,
				rating: ratingNumber
			}
		})
	}

	submitReview = (e) => {
		e.preventDefault()
		if (this.state.review.text && this.state.review.rating > 0) {
			axios.post(`${process.env.REACT_APP_API_URL}/reviews`, {
				author: this.state.user._id,
				rating: this.state.review.rating,
				content: this.state.review.text,
				place: this.state.placeInfo._id
			}).then(res => {
				axios.get(`${process.env.REACT_APP_API_URL}/reviews/${this.state.placeInfo._id}`)
				.then(res => {
					let reviews = res.data.reverse()
					let placeInfo = this.state.placeInfo
					placeInfo.reviews = reviews
					placeInfo.rating = Math.round(reviews.map(review => review.rating).reduce((a,b) => a + b) / placeInfo.reviews.length)
					this.setState({
						placeInfo: placeInfo,
						reviewInput: false
					})
				})
			}).catch(err => console.log(err))
		}
	}

	showReviewInput = () => {
		if (this.state.reviewInput) {
			return(
				<form onSubmit={(e) => this.submitReview(e)}>
					<div className="group">
						<label>Leave a review</label>
						<textarea onChange={(e) => this.setReview(e)} value={this.state.review.text}></textarea>
						<div className="rating">
							{[...Array(5)].map((n, i) => <i className={`${this.colorStarsReviews(i)} fa-star`} onClick={() => this.setRating(i)} index={n} key={i}></i>)}
						</div>
						<button className="primary small">Submit</button>
					</div>
				</form>
			)
		}
	}

	colorStarsReviews = (index) => index + 1 <= this.state.review.rating ? 'fas': 'far'

	colorStarsPlace = (index) => index + 1 <= this.state.placeInfo.rating ? 'fas': 'far'

	changeDate = (date, field) => {
		let dates = this.state.dates
		dates[field] = date
		this.setState({dates})
		this.toggleDisabled()
	}

	toggleDisabled = () => {
		if (this.state.dates.startDate && this.state.dates.endDate) {
			this.setState({
				buttonDisabled: false
			})
		} else {
			this.setState({
				buttonDisabled: true
			})
		}
	}

	selectGuests = (e) => {
		let guests = Number(e.target.value[0])
		this.setState({guests})
	}

	goToConfirm = (e) => {
		e.preventDefault()
		this.props.history.push({
			pathname: `/confirm/${this.state.placeInfo._id}`,
			place: this.state.placeInfo,
			dates: this.state.dates,
			user: this.state.user,
			guests: this.state.guests,
			handleChange: this.handleChange
		})
	}

	render() {
		return(
			<>
				<Nav user={this.state.user}/>
				<Gallery pictures={this.state.placeInfo.images} selected={this.state.selected} changeSelected={this.changeSelected} info={this.state.placeInfo} renderLike={this.renderLike} toggleLike={this.toggleLike} />
				<div className="grid medium">
					<div className="grid sidebar-right">
						<div className="content">
							<h1>{this.state.placeInfo.title}</h1>
							<small>
								<i className="fas fa-map-marker-alt"></i>
								<span>{`${this.state.placeInfo.city}, ${this.state.placeInfo.country}`}</span>
							</small>
							<div className="user">
								<div className="avatar" style={{backgroundImage: `url(${this.state.placeInfo.host.avatar})`}}></div>
								<div className="name">
									<small>Hosted by</small>
									<span>{this.state.placeInfo.host.name}</span>
								</div>
							</div>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
										<li><i className="fas fa-fw fa-home"></i>{this.state.placeInfo.type.name}</li>
										<li><i className="fas fa-fw fa-user-friends"></i>{this.state.placeInfo.guests} guests</li>
										<li><i className="fas fa-fw fa-bed"></i>{this.state.placeInfo.rooms} bedrooms</li>
										<li><i className="fas fa-fw fa-bath"></i>{this.state.placeInfo.bathrooms} baths</li>
									</ul>
								</div>
							</div>
							<p>{this.state.placeInfo.description}</p>
							<h3>Amenities</h3>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
									{this.state.placeInfo.amenities.map((a, i) => <li key={i}><i className={`fas fa-${a.icon}`}></i>{a.name}</li>)}
									</ul>
								</div>
							</div>
							<div className="reviews">
								<h2>{this.state.placeInfo.reviews.length} Reviews</h2>
								{this.showReviewInput()}
								{this.state.placeInfo.reviews.map((review, i) => <Review key={i} review={review} />)}
							</div>
						</div>
						<div className="sidebar booking">
							<div className="card shadow">
								<div className="content large">
									<h3>${this.state.placeInfo.price}<small>per night</small></h3>
									<small>
										{[...Array(5)].map((n, i) => <i className={`${this.colorStarsPlace(i)} fa-star`} key={i}></i>)}
										<span>{this.state.placeInfo.reviews.length} Reviews</span>
									</small>
									<form className="small">
										<div className="group">
											<label>Dates</label>
											<DatePicker selected={this.state.dates.startDate} onChange={(e) => this.changeDate(e, 'startDate')} />
											<DatePicker selected={this.state.dates.endDate} onChange={(e) => this.changeDate(e, 'endDate')}/>
										</div>
										<div className="group">
											<label>Guests</label>
											<select onChange={this.selectGuests}>
												{[...Array(this.state.placeInfo.guests)].map((n, i) => <option key={i}>{i === 0 ?'1 guest' :`${i + 1} guests`}</option>)}
											</select>
										</div>
										<div className="group">
											<button className="secondary full" onClick={(e) => this.goToConfirm(e)} disabled={this.state.buttonDisabled}>Book this place</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Place

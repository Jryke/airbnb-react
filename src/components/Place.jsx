import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav.jsx'
import Gallery from './Gallery.jsx'
import Review from './Review.jsx'
import '../styles/filters.css'
import '../styles/grid.css'
import '../styles/buttons.css'
import '../styles/icons.css'
import '../styles/reviews.css'
import '../styles/users.css'

class Place extends React.Component {
	state = {
		user: {
			name: 'Tony',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
		},
		placeInfo: {
			images: [],
			amenities: [],
			type: {},
			host: {},
			reviews: []
		},
		review:{
			text: '',
			rating: 0
		},
		selected: ''
	}

	componentWillMount() {
		axios.get(`http://localhost:4000/places/5d720f54913f9d03fe347c41`)
			.then(res => {
				console.log(res.data)
				// res.data.type = res.data.type.name
				this.setState({
					placeInfo : res.data,
					selected: res.data.images[0]
				})
			})
			.catch(err => console.log(err))
	}

	changeSelected = (newSelected) => {
		this.setState({
			selected: newSelected
		})
	}

	toggleLike = (e) => {
		e.preventDefault()
		let place = this.state.placeInfo
		place.liked = !place.liked
		this.setState({place})
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
			let newReview = {
				author: {
					avatar: this.state.user.avatar,
					name: this.state.user.name,
				},
				content: this.state.review.text,
				date: `${new Date()}`,
				rating: this.state.review.rating
			}
			// change this to an axios post, then get to set state
			let newReviewsArr = [newReview, ...this.state.placeInfo.reviews]
			this.setState({
				placeInfo: Object.assign({}, this.state.placeInfo, { reviews: newReviewsArr }),
				review: {
					text: '',
					rating: 0
				}
			})
		}
	}

	colorStarsReviews = (index) => index + 1 <= this.state.review.rating ? 'fas': 'far'

	colorStarsPlace = (index) => index + 1 <= this.state.placeInfo.rating ? 'fas': 'far'

	render() {
		return(
			<>
				<Nav user={this.state.user}/>
				<Gallery pictures={this.state.placeInfo.images} selected={this.state.selected} changeSelected={this.changeSelected} info={this.state.placeInfo} toggleLike={this.toggleLike}/>
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
											<input type="text" placeholder="Check-in" />
											<input type="text" placeholder="Check-out" />
										</div>
										<div className="group">
											<label>Guests</label>
											<select>
												{[...Array(this.state.placeInfo.guests)].map((n, i) => <option key={i}>{i === 0 ?'1 guest' :`${i + 1} guests`}</option>)}
											</select>
										</div>
										<div className="group">
											<Link to="/confirm"><button className="secondary full">Book this place</button></Link>
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

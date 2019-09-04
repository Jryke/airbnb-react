import React from 'react'
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
		host: {
			name: 'Kitty',
			avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
		},
		pictures: [
			'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223180.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223199.jpg'
		],
		selected: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
		placeInfo: {
			name: 'Luxury Villa Indu Siam',
			type: 'Entire Villa',
			rooms: 7,
			bathrooms: 6,
			guests: 10,
			price: 350,
			reviews: 4,
			img: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			location: 'Koh Samui, Thailand',
			description: 'Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.',
			liked: true
		},
		amenities: [
			{
				amenity: 'Kitchen',
				className: 'fas fa-utensils'
			},{
				amenity: 'Gym',
				className: 'fas fa-dumbbell'
			},{
				amenity: 'Wi-Fi',
				className: 'fas fa-wifi'
			},{
				amenity: 'Iron',
				className: 'fas fa-tshirt'
			},{
				amenity: 'Swimming Pool',
				className: 'fas fa-swimmer'
			},{
				amenity: 'Air Conditioning',
				className: 'fas fa-wind'
			},{
				amenity: 'TV',
				className: 'fas fa-tv'
			}
		],
		reviews: [
			{
				name: 'Amanda',
				avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
				date: '27 July 2019',
				review: {
					text: 'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.',
					rating: 5
				}
			},{
				name: 'John',
				avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
				date: '22 July 2019',
				review: {
					text: 'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.',
					rating: 3
				}
			},{
				name: 'Sam',
				avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
				date: '4 July 2019',
				review: {
					text: 'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.',
					rating: 1
				}
			},{
				name: 'Ella',
				avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
				date: '27 May 2019',
				review: {
					text: 'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.',
					rating: 4
				}
			}
		],
		review:{
			text: '',
			rating: 0
		}
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

	setRating = (index) => {
		let ratingNumber = index + 1
		console.log(ratingNumber)
		this.setState({
			review: {
				text: this.state.review.text,
				rating: ratingNumber
			}
		})
	}

	colorStars = (index) => index + 1 <= this.state.review.rating ? 'fas': 'far'

	render() {
		return(
			<>
				<Nav user={this.state.user}/>
				<Gallery pictures={this.state.pictures} selected={this.state.selected} changeSelected={this.changeSelected} info={this.state.placeInfo} toggleLike={this.toggleLike}/>
				<div className="grid medium">
					<div className="grid sidebar-right">
						<div className="content">
							<h1>{this.state.placeInfo.name}</h1>
							<small>
								<i className="fas fa-map-marker-alt"></i>
								<span>{this.state.placeInfo.location}</span>
							</small>
							<div className="user">
								<div className="avatar" style={{backgroundImage: `url(${this.state.host.avatar})`}}></div>
								<div className="name">
									<small>Hosted by</small>
									<span>{this.state.host.name}</span>
								</div>
							</div>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
										<li><i className="fas fa-fw fa-home"></i>{this.state.placeInfo.type}</li>
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
									{this.state.amenities.map((a, i) => <li key={i}><i className={a.className}></i>{a.amenity}</li>)}
									</ul>
								</div>
							</div>
							<div className="reviews">
								<h2>{this.state.placeInfo.reviews} Reviews</h2>
								<form>
									<div className="group">
										<label>Leave a review</label>
										<textarea></textarea>
										<div className="rating">
											{[...Array(5)].map((n, i) => <i className={`${this.colorStars(i)} fa-star`} onClick={() => this.setRating(i)} index={n} key={i}></i>)}
										</div>
										<button className="primary small">Submit</button>
									</div>
								</form>
								{this.state.reviews.map((review, i) => <Review key={i} review={review} />)}
							</div>
						</div>
						<div className="sidebar booking">
							<div className="card shadow">
								<div className="content large">
									<h3>${this.state.placeInfo.price}<small>per night</small></h3>
									<small>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="far fa-star"></i>
										<span>{this.state.placeInfo.reviews} Reviews</span>
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
											<button className="secondary full">Book this place</button>
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

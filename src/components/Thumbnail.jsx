import React from 'react'
import '../styles/cards.css'

class Thumbnail extends React.Component {

	renderLocation = () => {
		if (this.props.info.city) {
			return <small className="location">
				<i className="fas fa-map-marker-alt"></i>
				<span>{this.props.info.city}, {this.props.info.country}</span>
			</small>
		}
	}

	renderDates = () => {
		if (this.props.info.dates) {
			return <span className="date">{this.props.info.dates}</span>
		}
	}

	renderRooms = () => {
		return this.props.info.bedrooms === 1 ? 'Room' : 'Rooms'
	}

	colorStars = (index) => index + 1 <= this.props.info.rating ? 'fas': 'far'

	render() {
		return(
			<>
				<div className="image" style={{backgroundImage: `url(${this.props.info.image})`}}>
					<button className="icon" onClick={(e) => this.props.toggleLike(e, this.props.info._id)}>
						<i className={`${this.props.renderLike(this.props.info._id)} fa-heart`}></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.info.type.name} • {this.props.info.bedrooms} {this.renderRooms()}</small>
					<h2>{this.props.info.title}</h2>
					{this.renderLocation()}
					<span className="price">${this.props.info.price}/night</span>
					<span className="rating">
						{[...Array(5)].map((n, i) => <i className={`${this.colorStars(i)} fa-star`} key={i}></i>)}
						<span>{this.props.info.reviews.length} Reviews</span>
					</span>
					{this.renderDates()}
				</div>
			</>
		)
	}
}

export default Thumbnail

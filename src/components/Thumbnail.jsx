import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/cards.css'

class Thumbnail extends React.Component {

	setHeartClass = () => this.props.info.liked ? 'fas' : 'far'

	inputLocation = () => {
		if (this.props.info.location) {
			return <small class="location">
				<i class="fas fa-map-marker-alt"></i>
				<span>{this.props.info.location}</span>
			</small>
		}
	}

	inputDates = () => {
		if (this.props.info.dates) {
			return <span class="date">{this.props.info.dates}</span>
		}
	}

	render() {
		return(
			<Link className="card link" to="/Place">
				<div className="image" style={{backgroundImage: `url(${this.props.info.img})`}}>
					<button className="icon" onClick={(e) => this.props.toggleLike(e, this.props.index)}>
						<i className={`${this.setHeartClass()} fa-heart`}></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.info.type} • {this.props.info.rooms} Rooms</small>
					<h2>{this.props.info.name}</h2>
					{this.inputLocation()}
					<span className="price">${this.props.info.price}/night</span>
					<span className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
						<span>{this.props.info.reviews} Reviews</span>
					</span>
					{this.inputDates()}
				</div>
			</Link>
		)
	}
}

export default Thumbnail

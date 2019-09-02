import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/cards.css'

class Thumbnail extends React.Component {
	render() {
		return(
			<Link className="card link" to="/Place">
				<div className="image" style={{backgroundImage: `url(${this.props.info.img})`}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.info.type} • {this.props.info.rooms} Rooms</small>
					<h2>{this.props.info.name}</h2>
					<span className="price">${this.props.info.price}/night</span>
					<span className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
						<span>{this.props.info.reviews} Reviews</span>
					</span>
				</div>
			</Link>
		)
	}
}

export default Thumbnail

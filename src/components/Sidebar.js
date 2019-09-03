import React from 'react'
import '../styles/sidebar.css'

class Sidebar extends React.Component {
	render() {
		return(
			<div className="sidebar">
				<div className="card link">
					<div className="image" style={{backgroundImage: `url(${this.props.place.img})`}}>
						<button className="icon">
							<i className="far fa-heart"></i>
						</button>
					</div>
					<div className="content">
						<small className="meta">{this.props.place.type} • {this.props.place.rooms} Rooms</small>
						<h2>{this.props.place.name}</h2>
						<span className="price">${this.props.place.price}/night</span>
						<span className="rating">
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="far fa-star"></i>
							<span>{this.props.place.reviews} Reviews</span>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Sidebar

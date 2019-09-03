import React from 'react'

class Review extends React.Component {
	render() {
		return(
			<div className="card review">
				<div className="content">
					<div className="user">
						<div className="avatar" style={{backgroundImage: `url(${this.props.review.avatar})`}}></div>
						<div className="name">
							<small>{this.props.review.date}</small>
							<span>{this.props.review.name}</span>
						</div>
					</div>
					<div className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
					</div>
					<p>{this.props.review.review}</p>
				</div>
			</div>
		)
	}
}

export default Review

import React from 'react'
import moment from 'moment'

class Review extends React.Component {

	colorStars = (index) => index + 1 <= this.props.review.rating ? 'fas': 'far'

	render() {
		return(
			<div className="card review">
				<div className="content">
					<div className="user">
						<div className="avatar" style={{backgroundImage: `url(${this.props.review.author.avatar})`}}></div>
						<div className="name">
							<small>{moment(this.props.review.date).format('D MMM YYYY')}</small>
							<span>{this.props.review.author.name}</span>
						</div>
					</div>
					<div className="rating">
						{[...Array(5)].map((star, i) => <i className={`${this.colorStars(i)} fa-star`} key={i}></i>)}
					</div>
					<p>{this.props.review.content}</p>
				</div>
			</div>
		)
	}
}

export default Review

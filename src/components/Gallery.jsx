import React from 'react'
import '../styles/gallery.css'

class Gallery extends React.Component {

	setHeartClass = () => this.props.info.liked ? 'fas' : 'far'

	render() {
		return(
			<div className="gallery">
				<div className="image-main" style={{backgroundImage: `url(${this.props.selected})`}}>
					<button className="icon" onClick={(e) => this.props.toggleLike(e)}>
						<i className={`${this.setHeartClass()} fa-heart`}></i>
					</button>
				</div>
				<div className="thumbnails">
					{this.props.pictures.map((link, i) => <div className="thumbnail" style={{backgroundImage: `url(${link})`}} onClick={() => this.props.changeSelected(link)} key={`picture${i}`}></div>)}
				</div>
			</div>
		)
	}
}

export default Gallery

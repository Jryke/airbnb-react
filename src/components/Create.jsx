import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav.jsx'
import Sidebar from './Sidebar.jsx'
import '../styles/grid.css'
import '../styles/buttons.css'
import '../styles/forms.css'

class Create extends React.Component {
	state ={
		user: {
			name: '',
			avatar: '',
			location: '',
			email: ''
		},
		types: [],
		amenities: [],
		newPlace: {
			type: '5db21d5438a26c7401205b77',
			amenities: []
		}
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
		axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
			token: token
		}).then(res => {
			this.setState({
				user: res.data
			})
		}).catch(err => console.log(err))
		axios.get(`${process.env.REACT_APP_API_URL}/types`)
			.then(res => {
				this.setState({
					types: res.data
				})
			})
			.catch(err => console.log(err))
		axios.get(`${process.env.REACT_APP_API_URL}/amenities`)
		.then(res => {
			this.setState({
				amenities: res.data
			})
		})
		.catch(err => console.log(err))
	}

	sendInputToState = (e, input, inputObj) => {
		let state = this.state
		state.newPlace[input] = e.target.value
		this.setState({state})
	}

	sendAmenityToState = (e) => {
		let newPlace = this.state.newPlace
		if (!newPlace.amenities.includes(e.target.id)) {
			newPlace.amenities.push(e.target.id)
		} else {
			newPlace.amenities.splice(newPlace.amenities.indexOf(e.target.id), 1)
		}
		this.setState({newPlace})
	}

	render() {
		return(
			<>
			<Nav user={this.state.user} />
			<div className="grid medium">
				<div className="grid sidebar-left">
					<Sidebar />
					<div className="content">
						<h2>Host a new place</h2>
						<form>
							<div className="group">
								<label>Title</label>
								<input type="text" onChange={(e) => this.sendInputToState(e, 'title')} value={this.state.newPlace.title} />
							</div>
							<div className="group">
								<label>Description</label>
								<textarea onChange={(e) => this.sendInputToState(e, 'description')} value={this.state.newPlace.description} ></textarea>
							</div>
							<div className="group">
								<label>City or Town</label>
								<input type="text" onChange={(e) => this.sendInputToState(e, 'city')} value={this.state.newPlace.city} />
							</div>
							<div className="group">
								<label>Country</label>
								<input type="text" onChange={(e) => this.sendInputToState(e, 'country')} value={this.state.newPlace.country} />
							</div>
							<div className="group">
								<label>Price per Night (USD)</label>
								<input type="number" onChange={(e) => this.sendInputToState(e, 'price')} value={this.state.newPlace.price} />
							</div>
							<div className="group">
								<label>Type</label>
								<select onChange={(e) => this.sendInputToState(e, 'type')} value={this.state.newPlace.type} >
									{this.state.types.map((type, i) => <option key={i} value={type._id}>{type.name}</option>)}
								</select>
							</div>
							<div className="group">
								<label>Number of Rooms</label>
								<input type="number" onChange={(e) => this.sendInputToState(e, 'bedrooms')} value={this.state.newPlace.bedrooms} />
							</div>
							<div className="group">
								<label>Number of Bathrooms</label>
								<input type="number" onChange={(e) => this.sendInputToState(e, 'bathrooms')} value={this.state.newPlace.bathrooms} />
							</div>
							<div className="group">
								<label>Maximum number of Guests</label>
								<input type="number" onChange={(e) => this.sendInputToState(e, 'guests')} value={this.state.newPlace.guests} />
							</div>
							<div className="group">
								<label>Upload Photos</label>
								<input type="file" multiple onChange={(e) => this.sendInputToState(e, 'img')} value={this.state.newPlace.img} />
							</div>
							<div className="group">
								<label>Amenities</label>
								{this.state.amenities.map((amenity, i) => {
									return(
										<label key={i} className="checkbox">
											<input type="checkbox" id={amenity._id} onChange={(e) => this.sendAmenityToState(e)} checked={this.state.newPlace.amenities.includes(amenity._id)} /> {amenity.name}
										</label>
									)
								})}
							</div>
							<Link to="/host"><button className="primary">Publish this Place</button></Link>
							<button className="cancel"><i className="fas fa-times"></i></button>
						</form>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Create

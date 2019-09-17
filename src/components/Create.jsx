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
		types: ['Entire Villa', 'Entire House', 'Entire Apartment', 'Private Room', 'Shared Villa', 'Shared House', 'Shared Apartment'],
		amenities: ['Swimming Pool', 'Kitchen', 'Wi-Fi', 'TV', 'Gym', 'Iron', 'Air Conditioning']
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
		axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
			token: token
		}).then(res => {
			this.setState({
				user: res.data
			})
		})
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
								<input type="text" />
							</div>
							<div className="group">
								<label>Description</label>
								<textarea></textarea>
							</div>
							<div className="group">
								<label>City or Town</label>
								<input type="text" />
							</div>
							<div className="group">
								<label>Country</label>
								<input type="text" />
							</div>
							<div className="group">
								<label>Price per Night (USD)</label>
								<input type="number" />
							</div>
							<div className="group">
								<label>Type</label>
								<select>
									{this.state.types.map((type, i) => <option key={i}>{type}</option>)}
								</select>
							</div>
							<div className="group">
								<label>Number of Rooms</label>
								<input type="number" />
							</div>
							<div className="group">
								<label>Number of Bathrooms</label>
								<input type="number" />
							</div>
							<div className="group">
								<label>Maximum number of Guests</label>
								<input type="number" />
							</div>
							<div className="group">
								<label>Upload Photos</label>
								<input type="file" multiple />
							</div>
							<div className="group">
								<label>Amenities</label>
								{this.state.amenities.map((amenity, i) => {
									return(
										<label key={i} className="checkbox">
											<input type="checkbox" /> {amenity}
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

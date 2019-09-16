import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/buttons.css'
import '../styles/forms.css'

class Signup extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		location: '',
		profilePicture: '',
		errorMessage: ''
	}

	sendInputToState = (e, input) => {
		let state = this.state
		state[input] = e.target.value
		this.setState({state})
	}

	setErrorMessage = (message) => {
			this.setState({
				errorMessage: message
			})
	}

	submitForm = (e) => {
		e.preventDefault()
		if (this.state.name && this.state.email && this.state.password && this.state.location) {
			axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				location: this.state.location
			}).then(res => {
				if (res.data === 'error') {
					console.log(res.data)
					this.setErrorMessage('*Error: account already exists. Go to login*')
				} else {
					localStorage.setItem('token', res.data.token)
					this.props.history.push({
					pathname: '/'
					})
				}
			})
		} else {
			this.setErrorMessage('*Complete all information fields to sign up*')
		}

	}

	render() {
		return(
			<div className="grid center middle tall image">
				<div className="card small">
					<div className="content">
						<div className="logo" style={{backgroundImage: "url('images/logo-airbnb.png')"}}></div>
						<form>
							<div className="group">
								<label>Name</label>
								<input type="text" onChange={(e) => this.sendInputToState(e, 'name')} />
							</div>
							<div className="group">
								<label>Email</label>
								<input type="email" onChange={(e) => this.sendInputToState(e, 'email')} />
							</div>
							<div className="group">
								<label>Password</label>
								<input type="password" onChange={(e) => this.sendInputToState(e, 'password')} />
							</div>
							<div className="group">
								<label>Location</label>
								<input type="text" onChange={(e) => this.sendInputToState(e, 'location')} />
							</div>
							<div className="group">
								<label>Profile Picture</label>
								<input type="file" />
							</div>
							<div>
								{this.state.errorMessage ? <span style={{'lineHeight': '4em', 'color': 'red'}}>{this.state.errorMessage}</span> : null}
							</div>
							<button className="primary" onClick={this.submitForm}>Signup</button>
						</form>
						<p className="footer">
							Already have an account? <Link to="/Login">Login</Link>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup

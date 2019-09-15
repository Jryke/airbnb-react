import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/buttons.css'
import '../styles/forms.css'

class Login extends React.Component {
	state = {
		email: '',
		password: '',
		errorMessage: ''
	}

	sendInputToState = (e, input) => {
		let state = this.state
		state[input] = e.target.value
		this.setState({state})
	}

	submitLogin = (e) => {
		e.preventDefault()
		if (this.state.email && this.state.password) {
			axios.post('http://localhost:4000/login', {
				email: this.state.email,
				password: this.state.password
			}).then(res => {
				localStorage.setItem('token', res.data.token)
				this.props.history.push({
				pathname: '/'
				})
			})
		} else {
			this.setState({
				errorMessage: '*email and password must be completed to log in*'
			})
		}
	}


	render() {
		return(
			<div className="grid center middle tall image">
				<div className="card small">
					<div className="content">
						<div className="logo" style={{backgroundImage: "url('images/logo-airbnb.png')"}}></div>
						<form onSubmit={this.submitLogin} >
							<div className="group">
								<label>Email</label>
								<input type="email" value={this.state.email} onChange={(e) => this.sendInputToState(e, 'email')}/>
							</div>
							<div className="group">
								<label>Password</label>
								<input type="password" value={this.state.password} onChange={(e) => this.sendInputToState(e, 'password')} />
							</div>
							<span style={{'lineHeight': '4em', 'color': 'red'}}>{this.state.errorMessage}</span>
							<button className="primary">Login</button>
						</form>
						<p className="footer">
							New to Airbnb? <Link to="/Signup">Signup</Link>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Login

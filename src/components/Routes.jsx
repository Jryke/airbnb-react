import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Places from './Places.jsx'
import Place from './Place.jsx'
import Confirm from './Confirm.jsx'
import Profile from './Profile.jsx'
import Bookings from './Bookings.jsx'
import Favorites from './Favorites.jsx'
import Host from './Host.jsx'
import Create from './Create.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import '../styles/global.css'

class Routes extends React.Component {
	checkForToken = () => {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false
		}

	}

	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/signup' component={Signup} />
					<Route path='/profile' render={ () => this.checkForToken() ? <Profile /> : <Redirect to='/login' />} />
					<Route path='/place/:id' render={ () => this.checkForToken() ? <Place /> : <Redirect to='/login' />} />
					<Route path='/login' component={Login} />
					<Route path='/host' render={ () => this.checkForToken() ? <Host /> : <Redirect to='/login' />} />
					<Route path='/favorites' render={ () => this.checkForToken() ? <Favorites /> : <Redirect to='/login' />} />
					<Route path='/create' render={ () => this.checkForToken() ? <Create /> : <Redirect to='/login' />} />
					<Route path='/confirm/:id' render={ () => this.checkForToken() ? <Confirm /> : <Redirect to='/login' />} />
					<Route path='/bookings' render={ () => this.checkForToken() ? <Bookings /> : <Redirect to='/login' />} />
					<Route path='/' render={ () => this.checkForToken() ? <Places /> : <Redirect to='/login' />} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

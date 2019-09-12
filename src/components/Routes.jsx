import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
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
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/signup' component={Signup} />
					<Route path='/profile' component={Profile} />
					<Route path='/place/:id' component={Place} />
					<Route path='/login' component={Login} />
					<Route path='/host' component={Host} />
					<Route path='/favorites' component={Favorites} />
					<Route path='/create' component={Create} />
					<Route path='/confirm' component={Confirm} />
					<Route path='/bookings' component={Bookings} />
					<Route path='/' component={Places} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

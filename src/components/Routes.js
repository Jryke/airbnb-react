import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places'
import Place from './Place'
import Confirm from './Confirm'
import Profile from './Profile'
import Bookings from './Bookings'
import Favorites from './Favorites'
import Host from './Host'
import Create from './Create'
import Signup from './Signup'
import Login from './Login'
import '../styles/global.css'

class Routes extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/signup' component={Signup} />
					<Route path='/profile' component={Profile} />
					<Route path='/place' component={Place} />
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

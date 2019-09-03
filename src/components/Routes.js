import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places'
import Place from './Place'
import Confirm from './Confirm'
import Profile from './Profile'
import Bookings from './Bookings'
import Favorites from './Favorites'
import '../styles/global.css'

class Routes extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/Profile' component={Profile} />
					<Route path='/Place' component={Place} />
					<Route path='/Favorites' component={Favorites} />
					<Route path='/Confirm' component={Confirm} />
					<Route path='/Bookings' component={Bookings} />
					<Route path='/' component={Places} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

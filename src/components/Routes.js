import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places'
import Place from './Place'
import Confirm from './Confirm'
import Profile from './Profile'
import '../styles/global.css'

class Routes extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/Profile' component={Profile} />
					<Route path='/Place' component={Place} />
					<Route path='/Confirm' component={Confirm} />
					<Route path='/' component={Places} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

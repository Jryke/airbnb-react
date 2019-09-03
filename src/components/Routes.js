import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places'
import Place from './Place'
import '../styles/global.css'

class Routes extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/Place' component={Place} />
					<Route path='/' component={Places} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

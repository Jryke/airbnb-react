import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places'

class Routes extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Places />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

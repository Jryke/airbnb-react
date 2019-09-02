import React from 'react'
import Nav from './Nav'

class Places extends React.Component {
	state = {
		user: {
			name: 'Tony'
		}
	}
	render() {
		return(
			<>
				<Nav user={this.state.user} />
			</>
		)
	}
}

export default Places

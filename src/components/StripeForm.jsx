import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

class StripeForm extends React.Component {
	render() {
		return(
			<CardElement />
		)
	}
}

export default injectStripe(StripeForm)

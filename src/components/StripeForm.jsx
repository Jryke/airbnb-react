import React from 'react'
import axios from 'axios'
import {CardElement, injectStripe} from 'react-stripe-elements'

class StripeForm extends React.Component {
	state = {
		paymentSuccess: ''
	}

	submitPayment = (e) => {
		this.props.stripe.createToken({}).then(res => {
			axios.post(`${process.env.REACT_APP_API_URL}/pay`, {
				amount: this.props.amount * 100,
				currency: 'usd',
				description: this.props.description,
				source: res.token.id
			}).then(res => {
				this.setState({
					paymentSuccess: 'Payment Successful'
				})
				setTimeout(() => {
					this.setState({
						paymentSuccess: ''
					})
				}, 2000)
			})
		}).catch(err => console.log(err))
	}

	showPaymentSuccess = () => {
		if (this.state.paymentSuccess) {
			return this.state.paymentSuccess
		} else {
			return ''
		}
	}

	cancelConfirm = (e) => {
		e.preventDefault()
		this.props.history.goBack()
	}

	render() {
		return(
			<>
				<CardElement />
				<button className="primary pay-button" onClick={this.submitPayment}>Pay</button>
				<button className="primary pay-button" onClick={this.cancelConfirm}>Go Back</button>
				<div>{this.showPaymentSuccess()}</div>
			</>
		)
	}
}

export default injectStripe(StripeForm)

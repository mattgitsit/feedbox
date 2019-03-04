import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { handleStripeToken } from '../../actions';

export class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Feedbox"
        description="$5 for 5 survey credits"
        amount={500} // usd cents
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        allowRememberMe={false}>
        <button className="btn-flat blue lighten-2 white-text">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  { handleStripeToken }
)(Payments);

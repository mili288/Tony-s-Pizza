import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51KsmLPCGTQFqXJ54DcobAU54PNZoBKFo9xf8T960KDz9fWCRC5eoKpoQ6EuoMVAhZv2xmNk27nEYDjkHj4Q8LYKH00N6M24QPz"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
       <PaymentForm />
    </Elements>
  )
}

export default StripeContainer
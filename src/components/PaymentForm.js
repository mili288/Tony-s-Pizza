import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#808080",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#000" },
			"::placeholder": { color: "#808080" }
		},
		invalid: {
			iconColor: "#808080",
			color: "#808080"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="btn btn-outline-dark mb-5 w-25 mx-auto">Pay</button>
        </form>
        :
       <div>
           <h2 style={{fontSize: '60px', textAlign: 'center'}}>Payment Successful Thank You</h2>
           <div style={{display: 'flex', justifyContent: 'center'}}>
            <CheckCircleIcon style={{color: 'green', width: '100px', height: '100px'}} />
            </div>
       </div> 
        }
            
        </>
    )
}
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import StripeContainer from '../components/StripeContainer'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    const [showItem, setShowItem] = useState(false);

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    {showItem ? ( 
                    <StripeContainer /> 
                    ) : (              
                
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                            <button className="btn btn-outline-dark mb-5 mx-auto mt-2" onClick={() => setShowItem(true)}>Continue to Checkout</button>
                        </ul>

                    </div>
                    )}
                    

                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3 ms-4">Delivery address</h4>
                        <form className="needs-validation" noValidate=""/>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=""  required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName"  placeholder=""  required=""/>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                               

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                 </div>
                                 </div>
                    

                </div>
            </div>
                    
        </>
    )
}

export default Checkout
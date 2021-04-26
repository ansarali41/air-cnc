import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const Payment = () => {
    const handleToken = (token, address) => {
        console.log(`token: ${token} \n, address: ${address}`);
    }
    let product = {
        price: 163,
        name:'hotel diamond'
    }
    return (
        <section>
            <h6>payment section</h6>
            <div>
                <StripeCheckout
                    stripeKey="pk_test_51Ha1hsEGLbU7xdvfaEFs0QLW43c6o73yJ7HXHlkOQkWGoBNu6qBnhLwluQOErLRpcv2NS8mTOnalPENDGoOEdG3V00YHX2mT5u"
                    token={handleToken}
                    amount={product.price * 100}
                    name={product.name}
                    billingAddress
                    shippingAddress
                />
            </div>
        </section>
    );
};

export default Payment;
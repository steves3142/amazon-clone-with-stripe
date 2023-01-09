import React from 'react'
import Header from '../components/Header'
import Currency from "react-currency-formatter";
import Image from "next/image";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    const createCheckoutSession = async () => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const checkoutSession = await await axios.post(
            "/api/create-checkout-session",
            {
                items,
                email: session.user.email,
            }
        );

        // Redirect Customer to Checkout
        //     const result = await stripe.redirectToCheckout({
        //       sessionId: checkoutSession.data.id,
        //     });

        //     if (result.error) {
        //       alert(result.error.message);
        //     }
        //   };

        return (
            <div className='bg-grea-100'>
                <Header />

                <main className='lg:flex max-w-screen-2xl mx-auto'>
                    {/* Left */}
                    <div className='flex-grow m-5 shadow-sm'>
                        <Image
                            src="https://links.papareact.com/ikj"
                            width={1020}
                            height={250}
                            objectFit="contain"
                        />
                        <div className='flex flex-col p-5 space-y-10 bg-white'>
                            <h1 className="text-3xl border-b pb-4">
                                Your Shopping Basket
                            </h1>
                        </div>

                        <button
                            onClick={createCheckoutSession}
                            role="link">
                            Sign In To Checkout
                        </button>

                    </div>

                    <div></div>
                </main>
            </div>
        )
    }

    export default Checkout
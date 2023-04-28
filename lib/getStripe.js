import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
// const publishableKey =`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`

const getStripe =() => {
    if(!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        // stripePromise = loadStripe('pk_test_51MBJqYSIcdohDgwWeAiolpGwGmMgAdOSMjhEuzHLZwb3eyHkhELhJooYPbpzZRQUqLg6FVQ7HC34B2TUbxTDr1CN00rBYwvnkr');
        }

    return stripePromise;

}

export default getStripe;
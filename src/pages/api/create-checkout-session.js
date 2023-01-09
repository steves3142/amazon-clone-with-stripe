const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    const transformedItems = items.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                images: [item.image],
                name: item.title,
            },
            unit_amount: item.price * 100,
        },
        description: item.description,
        quantity: 1,
    }));

}
import React from 'react';
import PricingOption from '../pricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                '7 days limited access',
                '7 days limited deals',
                '7 days localized deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                '30 days access',
                '30 days deals',
                '30 days localized deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'unlimited access',
                'unlimited deals',
                'localized deals',
                'crazy deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-400 mt-5 py-4'>
            <h2 className='text-6xl text-white font-mono p-5'>Best deal of the town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam deleniti dicta alias maxime, praesentium maiores velit asperiores neque, accusamus officia omnis ea ratione. Voluptate sunt, quas atque natus alias illum vel id ipsum eaque. Impedit, voluptatum cumque delectus et sequi repellendus eligendi, quas labore pariatur odio consequatur dolor harum.</p>
            <div className='grid md:grid-cols-3 gap-4 m-4'>
                {
                    pricingOptions.map(option => <PricingOption
                        option={option}
                        key={option.id}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;
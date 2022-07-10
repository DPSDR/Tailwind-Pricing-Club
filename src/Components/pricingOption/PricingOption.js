import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-2xl font-bold bg-indigo-400 p-4 rounded-lg'>{name}</h2>
            <p className='mt-3'>
                <span className='text-5xl font-bold'>${price}</span>
                <span className='text-xl font-bold text-gray-400'>/mo</span>
            </p>
            <p className='text-xl font-bold text-left mt-2'>Benefit: </p>
            <p className='flex align-middle'>
                <CheckCircleIcon className='w-5 h-5 mr-2 text-green-600'></CheckCircleIcon>
                Awesome Features
            </p>
            <p>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </p>
            <button className='bg-green-500 py-3 px-7 mt-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 flex justify-center w-full text-white'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;
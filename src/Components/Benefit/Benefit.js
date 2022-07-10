import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benefit = (props) => {
    return (
        <p className='flex align-middle'>
            <CheckCircleIcon className='w-5 h-5 mr-2 text-green-600'></CheckCircleIcon>
            {props.benefit}
        </p>
    );
};

export default Benefit;
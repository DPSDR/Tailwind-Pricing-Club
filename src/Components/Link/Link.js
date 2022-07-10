import React from 'react';
import './Link.css'

const Link = (props) => {
    const { name, link } = props.route;
    return (
        <div>
            <li className='mr-10'>
                <a href={link}>{name}</a>
            </li>
        </div>
    );
};

export default Link;
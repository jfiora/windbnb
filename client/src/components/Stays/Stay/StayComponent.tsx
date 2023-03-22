import React from 'react';
import { Stay } from '../../../utils/types/Stay.type';

const StayComponent = (stay: Stay) => {
    return (
        <div key={stay._id}>
            <img src={stay.photo} />
            {stay.superHost ? <span>superhost</span> : null}
            <h3>{stay.beds}</h3>
            <h3>{stay.rating}</h3>
            <h1>{stay.title}</h1>
        </div>
    );
};

export default StayComponent;

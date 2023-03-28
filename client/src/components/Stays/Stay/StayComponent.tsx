import React from 'react';
import { Stay } from '../../../utils/types/Stay.type';
import starIcon from '../../../assets/star.svg';

const StayComponent = (stay: Stay) => {
    return (
        <div key={stay._id} className='stay-component'>
            <section className='stay-component-image-section'>
                <img src={stay.photo} />
            </section>
            <section className='stay-component-info-section'>
                <div className='stay-component-title-info'>
                    <p>
                        {stay.superHost ? <span>super host</span> : null}
                        <>
                            {stay.type}
                            {stay.beds ? `. ${stay.beds} beds` : null}
                        </>
                    </p>
                    <div className='stay-component-title-rating'>
                        <img src={starIcon} style={{ fill: 'red' }} />
                        <p>{stay.rating}</p>
                    </div>
                </div>
                <div className='stay-component-title'>
                    <p>{stay.title}</p>
                </div>
            </section>
        </div>
    );
};

export default StayComponent;

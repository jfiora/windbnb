import React from 'react';
import StayComponent from './Stay/StayComponent';
import { Stay } from '../../utils/types/Stay.type';

const Stays = ({ stays }: { stays: Stay[] }) => {
    return (
        <div>
            <div className='stays-component-top-bar'>
                <h1>Stays in Finland</h1>
                <p>{stays.length > 12 ? '12+' : stays.length} stays</p>
            </div>
            <div className='stays-component-container'>
                {stays.map((stay: Stay) => (
                    <StayComponent {...stay} key={stay._id} />
                ))}
            </div>
        </div>
    );
};

export default Stays;

import React from 'react';
import StayComponent from './Stay/StayComponent';
import { Stay } from '../../utils/types/Stay.type';

const Stays = ({ stays }: { stays: Stay[] }) => {
    return (
        <div>
            {stays.map((stay: any) => (
                <StayComponent {...stay} />
            ))}
        </div>
    );
};

export default Stays;

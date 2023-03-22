import React, { useState } from 'react';
import Stays from '../components/Stays/Stays';
import { Stay } from '../utils/types/Stay.type';

import { data } from '../mocks/data';

const StaysHomePage = () => {
    const [stays, setStays] = useState<Stay[]>(data);

    return (
        <div>
            <Stays stays={stays} />
        </div>
    );
};

export default StaysHomePage;

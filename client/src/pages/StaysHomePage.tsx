import React, { useState, useEffect } from 'react';
import Stays from '../components/Stays/Stays';
import { Stay } from '../utils/types/Stay.type';

import { data } from '../mocks/data';
import useFiltersStore from '../hooks/useFiltersStore';
import Navbar from '../components/Navbar/Navbar';

const StaysHomePage = () => {
    const [stays, setStays] = useState<Stay[]>(data);
    const { location, guests, setLocation, setGuests } = useFiltersStore();
    const [filteredStays, setFilteredStays] = useState<Stay[]>([]);

    const filterStays = () => {
        const filtered = stays.filter((stay) => {
            return stay.maxGuests >= guests;
        });
        setFilteredStays(filtered);
    };

    useEffect(() => {
        filterStays();
    }, [location, guests]);

    return (
        <div>
            <Navbar />
            <Stays stays={filteredStays} />
        </div>
    );
};

export default StaysHomePage;

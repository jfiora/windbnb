import React, { useState, useEffect } from 'react';
import Stays from '../components/Stays/Stays';
import { Stay } from '../utils/types/Stay.type';

import { data } from '../mocks/data';
import Search from '../components/Navbar/Search/Search';
import useFiltersStore from '../hooks/useFiltersStore';

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
            <Search />
            <div>
                <span>{filteredStays.length}</span>
            </div>
            <Stays stays={filteredStays} />
        </div>
    );
};

export default StaysHomePage;

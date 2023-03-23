import React, { useState } from 'react';
import useFiltersStore from '../../../hooks/useFiltersStore';

const Search = () => {
    const [loc, setLoc] = useState<string>('');
    const [gue, setGue] = useState<number>(1);
    const { location, guests, setLocation, setGuests } = useFiltersStore();

    const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoc(e.target.value);
    };

    const handleGuests = (guest: number) => {
        if (guest <= 0) {
            setGue(1);
        } else {
            setGue(guest);
        }
    };

    const searchFilters = () => {
        setLocation(loc);
        setGuests(gue);
    };

    return (
        <div>
            <h1>Search</h1>
            <div>
                <button onClick={() => handleGuests(gue - 1)}>
                    remove guest
                </button>
                <span>{gue}</span>
                <button onClick={() => handleGuests(gue + 1)}>add guest</button>
                <span>{location}</span>
                <input
                    type='text'
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                />
                <button onClick={searchFilters}>search</button>
            </div>
        </div>
    );
};

export default Search;

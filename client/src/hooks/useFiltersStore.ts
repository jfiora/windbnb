import { create } from 'zustand';
import { Filters } from '../utils/interfaces/Filter.interface';

const useFiltersStore = create<Filters>((set) => ({
    location: '',
    guests: 1,
    setLocation: (location: string) => set({ location }),
    setGuests: (guests: number) => {
        if (guests > 0) {
            set({ guests });
        }
    },
}));

export default useFiltersStore;

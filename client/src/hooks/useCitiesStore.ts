import { create } from 'zustand';
import { Cities } from '../utils/interfaces/Cities.interface';

const useCitiesStore = create<Cities>((set) => ({
    cities: [],
    addCity: (city: string) => {
        set((state) => ({ cities: [...state.cities, city] }));
    },
}));

export default useCitiesStore;

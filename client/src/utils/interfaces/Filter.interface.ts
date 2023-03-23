export interface Filters {
    location: string;
    guests: number;
    setLocation: (location: string) => void;
    setGuests: (guests: number) => void;
}

export interface Pet {
    _id: string;
    custumerId: string;
    chipNumber: string;
    name: string;
    birthDate: {
        year: number,
        month: number,
        day: number
    };
    species: string;
    race: string;
    description: string;
    photoURL: string;
}

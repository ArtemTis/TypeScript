export interface IAddress {
    street: string;
    city: string;
    zipcode: string
}

export interface IUser extends IHuman {
    address: IAddress;
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IHuman {
    id: number;
    name: string;
    email: string;
}


export interface ITable {
    rows: string[] | number[];
    columns: string[] | number[];
}

export interface Booking {
    location: string;
    game: string;
    quantity: number;
}
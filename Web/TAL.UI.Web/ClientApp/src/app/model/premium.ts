export interface IMember {
    name: string;
    age: Number;
    occupationId: Number;
    dateOfBirth: Date;
    deathSumInsured: Number;
    premium: Number;
    occupationList: IOccupation[];
}

export interface IOccupation{
    occupationid: Number;
    name: string;
}

export interface IPremium {
    name: string;
    age: Number;
    occupationId: Number;
    dateOfBirth: Date;
    deathSumInsured: Number;
    premium: Number;
}
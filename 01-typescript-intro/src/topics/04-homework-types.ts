/*
    ===== Código de TypeScript =====
*/

interface SuperHero{
    name: string;
    age: number;
    address: {
        street: string;
        country: string;
        ciudad: string;
    };
    showAddress(): string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );

/* esto funciona pero se aconseja que cuando tengamos un objeto dentro de una interface se declare una interfase específica para este objeto */
// Como sigue:


interface SuperHero2{
    name: string;
    age: number;
    address: Address;
    showAddress(): string;
}
interface Address{
    street: string;
    country: string;
    city: string;
}
const superHeroe2: SuperHero2 = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address2 = superHeroe2.showAddress();
console.log( address2 );


export {};


interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "ipad Air",
  price: 250,
};


interface taxCalculationOptions{
    tax: number;
    products: Product[]
}
//function taxCalculation(opcion: taxCalculationOptions): number[] {};

const shopingCart = [phone, tablet];
const tax = 0.15;

export {};

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

interface taxCalculationOptions {
  tax: number;
  products: Product[];
}

function taxCalculation(opcion: taxCalculationOptions): number[] {
  let total = 0;
  opcion.products.forEach((producto) => {
    total += producto.price;
  });
  return [total, total * opcion.tax];
}

const shopingCart = [phone, tablet];
const tax = 0.15;

const resultado = taxCalculation({
  products: shopingCart,
  tax,
});

console.log(resultado);
export {};

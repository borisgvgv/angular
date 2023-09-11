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

const shopingCart = [phone, tablet];
const tax = 0.15; //impuesto sobre cada artículo

interface taxCalculationOptions {
  products: Product[];
  tax: number;
}

/* DESESTRUCTURANDO 
function taxCalculation(opcion: taxCalculationOptions): number[] {
  let total = 0;
  opcion.products.forEach((producto) => {
    total += producto.price;
  });
  return [total, total * opcion.tax];
}
*/
function taxCalculation(opcion: taxCalculationOptions): [number, number] {
  const { products, tax } = opcion;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

/* DESESTRUCTURANDO 
const resultado = taxCalculation({
  products: shopingCart,
  tax,
});
*/
 const [total, taxTotal] = taxCalculation({
  products: shopingCart,
  tax,
});

const resultado = [total, taxTotal];

console.log(resultado);

export {};

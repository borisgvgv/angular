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

const resultado = taxCalculation({
  products: shopingCart,
  tax,
});

function taxCalculation(opcion: taxCalculationOptions): number[] {
  let total = 0;
  opcion.products.forEach((producto) => {
    total += producto.price;
  });
  return [total, total * opcion.tax];
  
}


console.log(resultado);


export {};

const products = require("./products");

function existProduct(nameProduct)
{
    let product = products.find(p => p.name === nameProduct);

    return product;
}

console.log(existProduct("Notebook"));
console.log(existProduct("Appel"));
const express = require("express");
const app = express();
const products = require("./data.js");

//middleware
app.use(express.json())
//serve static files
app.use(express.static('public'));
//middleware - parses urlencoded bodies 
app.use(express.urlencoded({ extended: true }));


app.get("/api/products", (req, res) => {
  const partial_products = products.map((product) => {
    return { id: product.id, name: product.name };
  });
  res.json(partial_products);
});

app.get("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
});

app.get("/api/query", (req, res) => {
  const name = req.query.name.toLowerCase();
  const products_result = products.filter((product) =>
    product.name.toLowerCase().includes(name)
  );

  if (products_result.length < 1) {
    return res.status(200).send("No products matched your search");
  }
  res.json(products_result);
});


app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});


app.get("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
});


app.put("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  const updatedProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  products[index] = updatedProduct;
  res.status(200).json("Product updated");
});

app.delete("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  products.splice(index, 1);
  res.status(200).json("Product deleted");
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.route('/login')
  .get( (req,res)=> {
    console.log("Query", req.query); //{ username: 'john', password: '123' }
    const user = req.query.username;
    console.log("User", user); //john
    const pass = req.query.password;
    console.log("Password", pass); //123
    const data = {
      message: 'Welcome Back',
      user
    }
    console.log("GET DATA", data);
    // { message: 'Welcome Back', user: 'john' }
    res.send(data)
  })
  .post( (req,res) => {
    console.log("req.body", req.body); //{ username: 'sara', password: 'abc' }
    let user = req.body.username;
    let pass = req.body.password;
    console.log("User", user); //Sara
    console.log("Pass", pass); //abc
    const data = {
      message: 'Welcome New User',
      user
    }
    console.log('POST DATA',data);
    //{ message: 'Welcome New User', user: 'Sara' }
    res.send(data)
  })

app.listen(3000, () => console.log('Example app listening on port 3000!'));
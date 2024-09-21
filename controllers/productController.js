let products = []; 

exports.getAllProducts = (req, res) => {
  res.render('index', { products });
};

exports.getAddProduct = (req, res) => {
  res.render('addProduct');
};

exports.postAddProduct = (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
  };
  products.push(newProduct);
  res.redirect('/products');
};

exports.getEditProduct = (req, res) => {
  const productId = req.params.productId;
  const product = products.find((p) => p.id == productId);
  res.render('editProduct', { product });
};

exports.postEditProduct = (req, res) => {
  const productId = req.params.productId;
  const { name, price, description } = req.body;
  const productIndex = products.findIndex((p) => p.id == productId);
  products[productIndex] = { id: productId, name, price, description };
  res.redirect('/products');
};

exports.postDeleteProduct = (req, res) => {
  const productId = req.params.productId;
  products = products.filter((p) => p.id != productId);
  res.redirect('/products');
};

hhhhhhhhhhhhhh
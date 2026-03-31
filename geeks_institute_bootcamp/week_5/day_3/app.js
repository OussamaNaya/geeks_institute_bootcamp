// Add this to your Product Model file
productSchema.index({ category: 1, price: -1 });


const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 12; // 12 products per page

  const products = await Product.find()
    .select('title price image') // Only fetch what's needed for the card
    .skip((page - 1) * limit)
    .limit(limit)
    .lean(); // Faster performance

  res.json(products);
};
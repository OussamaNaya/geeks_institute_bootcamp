const db = require('../db');

// Get all
const getAllItems = async () => {
  return await db.query('SELECT * FROM menu_items');
};

// Get by name
const getItemByName = async (name) => {
  return await db.query(
    'SELECT * FROM menu_items WHERE item_name = $1',
    [name]
  );
};

// Create
const createItem = async (name, price) => {
  return await db.query(
    'INSERT INTO menu_items (item_name, item_price) VALUES ($1, $2)',
    [name, price]
  );
};

// Update
const updateItem = async (id, name, price) => {
  return await db.query(
    'UPDATE menu_items SET item_name=$1, item_price=$2 WHERE item_id=$3',
    [name, price, id]
  );
};

// Delete
const deleteItem = async (id) => {
  return await db.query(
    'DELETE FROM menu_items WHERE item_id=$1',
    [id]
  );
};

module.exports = {
  getAllItems,
  getItemByName,
  createItem,
  updateItem,
  deleteItem
};
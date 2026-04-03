const menuModel = require('../models/menuModel');

// GET all
const getMenu = async (req, res) => {
  try {
    const data = await menuModel.getAllItems();
    res.json(data.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET by name
const getMenuItem = async (req, res) => {
  try {
    const data = await menuModel.getItemByName(req.params.name);
    res.json(data.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST
const addMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    await menuModel.createItem(name, price);
    res.json({ message: "Item added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT
const updateMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    await menuModel.updateItem(req.params.id, name, price);
    res.json({ message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteMenuItem = async (req, res) => {
  try {
    await menuModel.deleteItem(req.params.id);
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getMenu,
  getMenuItem,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem
};
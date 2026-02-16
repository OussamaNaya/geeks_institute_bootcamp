// fileManager.js
const fs = require("fs");
const path = require("path");


function readFile(fileName) {
  try {
    const filePath = path.join(__dirname, fileName);
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}


function writeFile(fileName, content) {
  try {
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Content written to ${fileName}`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

module.exports = {
  readFile,
  writeFile
};
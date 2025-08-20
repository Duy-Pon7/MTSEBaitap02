import express from "express"; // ES6 import syntax

let configViewEngine = (app) => {
  // You can also set static folder for images, CSS, etc.
  app.use(express.static("src/public")); // optional

  // Setup EJS as view engine
  app.set("view engine", "ejs");

  // Set views folder
  app.set("views", "./src/views");
};

// Export the function
module.exports = configViewEngine;

const express = require('express');
const ejs = require("ejs");
const path = require('path');

// Set up express app and SQLite database
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // Set EJS as the view engine
app.engine('html', ejs.renderFile); // Tell EJS to use .html files
app.set('views', path.join(__dirname, 'public'));


// ========================= Organisations =========================

app.get("/", (req, res) => {
    return res.render("index.html")
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


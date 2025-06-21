require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/books", bookRoutes);

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}.`);
  });
});

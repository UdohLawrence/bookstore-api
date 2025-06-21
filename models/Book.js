const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The book must have a title"],
    trim: true,
    maxLength: [60, "Book title cannot be more than 60 characters."],
  },
  author: {
    type: String,
    required: [true, "Name of the author is required"],
    trim: true,
    maxLength: [30, "Author's name cannot be more than 30 characters."],
  },
  year: {
    type: Number,
    required: [true, "Book must have a publication year"],
    trim: true,
    min: [1000, "We are only considering books that were written after 1000AD"],
    max: [new Date().getFullYear(), "Year cannot be in the future."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", booksSchema);

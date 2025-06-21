const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    if (books.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books fetched successfully.",
        data: books,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "There are no books in this collection",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try againn later.",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const bookID = req.params.id;

    const book = await Book.findById(bookID);

    if(!book){
      return res.status(404).json({
        success: false,
        message: "Book not found. Please, try again with a different ID."
      })
    }
    res.status(200).json({
      success: true,
      data: book
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try againn later.",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const formData = req.body;

    const newBook = await Book.create(formData);

    if (newBook) {
      res.status(201).json({
        success: true,
        message: "Book created successfully.",
        data: newBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "There was a problem creating the book.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try againn later.",
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const formData = req.body;

    const bookID = req.params.id;

    const book = await Book.findByIdAndUpdate(bookID, formData, {
      new: true
    });

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try againn later.",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookID = req.params.id;

    const book = await Book.findByIdAndDelete(bookID);

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: book
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try againn later.",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};

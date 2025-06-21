# Express.js API with MongoDB

![Node.js](https://img.shields.io/badge/Node.js-v16.x-green) ![Express.js](https://img.shields.io/badge/Express.js-v5.x-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-v5.x-brightgreen)

A RESTful API built with **Express.js** and **MongoDB** for managing books. This project provides a scalable backend with CRUD operations, environment configuration, and error handling.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **CRUD Operations**: Create, read, update, and delete resources.
- **MongoDB Integration**: Persistent data storage using MongoDB.
- **Environment Variables**: Secure configuration with `dotenv`.
- **Error Handling**: Centralized error management for robust API responses.
- **Middleware**: Includes logging and body parsing.
- **Scalable Structure**: Modular code organization for easy maintenance.

## Technologies

- **Node.js**: v16.x or higher
- **Express.js**: Web framework for building the API
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB
- **Dotenv**: Environment variable management
- **Insomnia**: HTTP request logging
- **Nodemon**: Auto-restart server during development

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)
- [Git](https://git-scm.com/) (for cloning the repository)
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/UdohLawrence/bookstore-api.git
   cd bookstore-api

2. **Install Dependencies**:

    ```bash
    npm install

3. **Set up MongoDB**:

    - For a local MongoDB instance, ensure MongoDB is running on mongodb://localhost:27017.

    - For MongoDB Atlas, obtain your connection string from the Atlas dashboard.

## Configuration

  Create a .env file in the root directory and add the following environment variables:

  ```bash
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/your-database-name
  ```

## Running the Application

- Start the server:

    ```bash
    npm start
    ```

- For development with auto-restart:

    ```bash
    npm run dev
    ```

The API will be available at <http://localhost:3000>.

API Endpoints
Below are the available API endpoints (replace /resources with your specific resource, e.g., /users or /products):

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/books | Retrieve all books |
| GET | /api/books/:id | Retrieve a book by ID |
| POST | /api/books |Create a new book |
| PUT | /api/books/:id | Update a book by ID |
| DELETE | /api/books/:id | Delete a book by ID |

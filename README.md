# URL-Shortener

A web-based URL shortening service that converts long URLs into short, shareable links.

## Key Features & Benefits

*   **URL Shortening:** Converts long URLs into shorter, more manageable links.
*   **Easy Sharing:** Shortened URLs are easy to share on social media, messaging apps, and other platforms.
*   **Simple Interface:** User-friendly interface for quick and easy URL shortening.
*   **MongoDB Integration:** Stores URL mappings in a MongoDB database for persistence.
*   **Customizable Short IDs:** Generates unique short IDs using `nanoid`.
*   **CORS Enabled:**  Supports Cross-Origin Resource Sharing for frontend integration.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:** (v16 or higher recommended) - [https://nodejs.org/](https://nodejs.org/)
*   **npm** (Node Package Manager) or **Yarn** - Included with Node.js installation.
*   **MongoDB:**  A running MongoDB instance - [https://www.mongodb.com/](https://www.mongodb.com/)

The project also relies on the following npm packages, which will be installed during the installation process:

*   `express`:  Web framework for Node.js
*   `mongoose`:  MongoDB object modeling tool
*   `nanoid`:  A tiny, secure, URL-friendly unique string ID generator
*   `dotenv`:  Loads environment variables from a `.env` file
*   `cors`:  Middleware for enabling CORS
*   `colors`:  For adding colors to console output
*   `axios`:  Promise based HTTP client for the browser and node.js

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Dark-Hunter-TR/URL-Shortener.git
    cd URL-Shortener
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Configure environment variables:**

    *   Create a `.env` file in the root directory of the project.
    *   Add the following environment variables to the `.env` file:

        ```
        PORT=8080 # Or any other available port
        MONGOODB_URL=mongodb://localhost:27017/urlshortener  # Replace with your MongoDB connection string
        ```

    *   Replace `mongodb://localhost:27017/urlshortener` with your actual MongoDB connection string.

4.  **Start the server:**

    ```bash
    node index.js
    ```

    The server will start and listen on the specified port (default: 8080).

## Usage Examples & API Documentation

### API Endpoints

*   **`POST /shorten`**: Shortens a URL.

    *   **Request Body:**

        ```json
        {
          "originalUrl": "https://www.example.com/very/long/url"
        }
        ```

    *   **Response (Success):**

        ```json
        {
          "shortUrl": "http://localhost:8080/YOUR_SHORT_ID"
        }
        ```

    *   **Response (Error):**

        ```json
        {
          "error": "Original URL is required"
        }
        ```

### Example Usage (JavaScript)

```javascript
const axios = require('axios');

async function shortenURL(originalUrl) {
  try {
    const response = await axios.post('http://localhost:8080/shorten', {
      originalUrl: originalUrl
    });
    console.log('Shortened URL:', response.data.shortUrl);
    return response.data.shortUrl;
  } catch (error) {
    console.error('Error shortening URL:', error.response.data.error);
    return null;
  }
}

// Example Usage
shortenURL('https://www.example.com/very/long/url');
```

## Project Structure

```
├── README.md          # Documentation
├── index.js           # Main entry point: connects to the database
├── package.json       # Project dependencies and scripts
└── src/
    ├── schemas/
    │   └── url.js     # Mongoose schema for URL model
    └── server.js      # Express server and API endpoints
```

## Configuration Options

*   **`PORT`**:  The port on which the server will listen.  Configured via the `.env` file.  Default is 8080.
*   **`MONGOODB_URL`**: The MongoDB connection string. Configured via the `.env` file.  Ensure the URL is valid and points to your MongoDB instance.

## Contributing Guidelines

Contributions are welcome!  If you'd like to contribute to this project, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your forked repository.
5.  Submit a pull request to the main repository.

## License Information

This project does not have a specified license. All rights are reserved by the owner.

## Acknowledgments

*   The `nanoid` library for generating unique short IDs.
*   The `mongoose` library for MongoDB object modeling.
*   The `express` framework for simplifying web application development.

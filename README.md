# URL Shortener API

## Overview
The URL Shortener API is a simple web application that allows users to shorten long URLs. It uses Node.js, Express.js, and MongoDB for the backend and includes features like storing shortened URLs in a MongoDB database and redirecting users to the original URL.

## Features
- Shortens long URLs and generates unique IDs for each.
- Stores original and shortened URLs in a MongoDB database.
- Redirects users to the original URL when the shortened URL is visited.
- Copies the shortened URL to the clipboard for easy sharing.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Other Tools: nanoid, dotenv, Mongoose

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (or use MongoDB Atlas for cloud setup)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/url_shortener
   PORT=5000
   ```

   Replace `localhost` with your MongoDB Atlas connection string if using the cloud.

4. Start the server:
   ```bash
   npm start
   ```

5. Open the application:
   - For development: `http://127.0.0.1:5500/public/index.html`
   - For production: `http://localhost:5000`

## Usage

### API Endpoints

#### POST /shorten

- Description: Shortens a long URL.
- Request Body:
  ```json
  {
    "originalUrl": "https://example.com"
  }
  ```

- Response:
  ```json
  {
    "shortUrl": "http://localhost:4000/abc123"
  }
  ```

#### GET /:shortUrlId

- Description: Redirects to the original URL based on the shortened URL ID.
- Example: Access `http://localhost:4000/abc123` to be redirected to the original URL.

## Project Structure
```plaintext
url-shortener/
├── public/
│   ├── index.html
│   ├── styles/
│   │   └── styles.css
│   └── script/
│       └── app.js
├── routes/
│   └── url.js
├── models/
│   └── Url.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## How to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License
This project is licensed under the MIT License.




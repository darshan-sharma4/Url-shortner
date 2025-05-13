# URL Shortener

A simple and efficient URL shortener application that allows users to shorten long URLs, track clicks, and manage their shortened links. Built with Node.js, Express, MongoDB, and EJS, this project includes user authentication for secure access and a clean, responsive UI styled with Bootstrap.

## Features

- **URL Shortening**: Convert long URLs into short, shareable links.
- **User Authentication**: Register and log in to manage your shortened URLs.
- **Click Tracking**: Monitor the number of clicks on each shortened URL.
- **Responsive Design**: User-friendly interface accessible on desktop and mobile devices.
- **MongoDB Integration**: Persistent storage for users and URLs.
- **Custom Short URLs**: Generate unique short codes for each URL.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: EJS, Bootstrap
- **Authentication**: Passport.js (Local Strategy)
- **Other Libraries**: Mongoose, Shortid, bcrypt

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance, e.g., MongoDB Atlas)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/darshan-sharma4/Url-shortner.git
   cd Url-shortner
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   SESSION_SECRET=your_session_secret
   ```
   - Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., `mongodb://localhost:27017/url-shortner` for local or a MongoDB Atlas URI).
   - Replace `your_session_secret` with a random string for session encryption.

4. **Run the Application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000` (or the port specified in `.env`).

## Usage

1. **Register/Login**: Create an account or log in to access the URL shortening features.
2. **Shorten URLs**: Enter a long URL in the input field to generate a shortened link.
3. **Manage URLs**: View your shortened URLs and their click counts on the dashboard.
4. **Share Links**: Copy and share the shortened URLs, which redirect to the original links.

## Project Structure

```
Url-shortner/
├── config/                  # Configuration files (MongoDB, Passport)
├── models/                  # Mongoose schemas (User, URL)
├── public/                  # Static assets (CSS, JS)
├── routes/                  # Express route handlers
├── views/                   # EJS templates
├── .env                     # Environment variables (not tracked)
├── app.js                   # Main application entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and includes relevant tests.


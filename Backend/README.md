### Chatbot Backend
This is the backend portion of a Chatbot application, designed to handle API requests, user authentication, and interaction with an AI service. It's built using Node.js and Express, with additional libraries to enhance functionality and security.

## Features
+ User authentication and token management with JWT.
+ Password encryption using bcrypt.
+ Integration with OpenAI for AI-powered chat responses.
+ RESTful API endpoints for user and chat management.
+ CORS configuration for secure cross-origin requests.
+ Validation of request data using express-validator.

## Getting Started
- Prerequisites
Ensure you have the following installed:
Node.js (version 12 or higher)
npm (usually comes with Node.js)

## Installation
- Clone the repository:
git clone https://github.com/HerRA17/Chat-Bot
- Navigate to the project directory:
cd backend
- Install dependencies:
npm install
## Environment Setup
- Create a .env file in the project root and add the necessary environment variables:
JWT_SECRET=your_jwt_secret
MONGODB_URL=your_mongodb_connection_string
Running the Server
- To start the development server, run:
npm run dev
This will start the server using nodemon and concurrently watch for TypeScript changes.

## Building the Project
- To compile TypeScript to JavaScript, run:
npm run build
The compiled JavaScript files will be in the dist directory.

## Technologies Used
- Node.js: JavaScript runtime environment.
- Express: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user and chat data.
- OpenAI: AI service for generating chat responses.

## API Endpoints
Document your API endpoints here, for example:

POST /api/user/login - Authenticate a user.
GET /api/chat - Retrieve chat messages.
POST /api/chat - Send a chat message.

## License
This project is licensed under the ISC License.
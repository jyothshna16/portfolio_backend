# portfolio_backend

## Project Objective

The objective of the backend is to provide a secure and reliable server-side application that supports the portfolio website by:

 . Handling API requests from the frontend (especially contact form submissions).

 . Validating and processing user input before saving.

 . Storing data securely in MongoDB using Mongoose.

 . Ensuring smooth communication between frontend and database.

 . Providing a scalable and maintainable REST API structure for future expansion (e.g., adding blog posts, project data, or authentication).

 The backend’s objective is to manage data flow between the frontend and MongoDB, ensuring form submissions and user interactions are processed securely and efficiently.

 ---

 ## Brief Description

 The portfolio-backend is a Node.js and Express.js application that serves as the server-side component of the portfolio website. It provides REST API endpoints to handle contact form submissions from the frontend, validates the data, and stores it securely in MongoDB using Mongoose.

---

## Links
- **GitHub Repository:** https://github.com/jyothshna16/portfolio_backend.git
- **Live Demo:**

---

## Technologies Used
-**Node.js**
-**Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**
- **CORS**
- **Nodemon** (Dev Dependency)

  ---

## How to Run Locally
- **Clone the repository**
```bash
git clone https://github.com/jyothshna16/portfolio_backend
```
- **Navigate into the project folder**
```bash
cd portfolio_backend
```
- **Install dependencies**
```bash
npm install
```
- **Start the development server**
```bash
npm start
```

## Challenges Faced & Solutions
- **Challenge:** Database Connection Errors
  **Solution:** Added the correct MongoDB URI in .env, enabled access for all IP addresses in MongoDB Atlas, and used mongoose.connect() with proper options (useNewUrlParser, useUnifiedTopology).

- **Challenge:** Form Data Validation
  **Solution:** Created a Mongoose schema with required fields (name, email, message) and added validation logic to reject invalid entries.

## Screenshots

---

## Feature List
-User Management, Resume Data Handling
-API Development
-File Management
-Database Integration, Notifications & Feedback
-Security & Performance
-Extras (Optional / Advanced)

---

## Sample Input & Output

   Sample Input (JSON):
   
   {
   
  "name": "Jyothshna",
  
  "email": "jyothshna@example.com",
  
  "password": "StrongPass123"
  
}


Sample Output (JSON):

{

  "success": true,
  
  "message": "User registered successfully",
  
  "userId": "64f9c8a12e3b4a0012345678"
  
}

---


## Evaluation Criteria Mapping

| **Criteria**                       | **What It Means / Example**                        | **How to Demonstrate / Assess**                                                                |
| ---------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Functionality**                  | Backend performs required operations               | User registration/login works, resume data CRUD operations function properly                   |
| **Security**                       | Data and endpoints are secure                      | Passwords hashed, JWT authentication implemented, API endpoints protected                      |
| **Data Management**                | Proper storage and retrieval of data               | MongoDB schemas designed, data validation, relationships between collections handled correctly |
| **API Design**                     | APIs are well-structured and follow best practices | RESTful endpoints, meaningful status codes, error handling, input validation                   |
| **Performance & Efficiency**       | Backend responds quickly and efficiently           | Optimized queries, minimal response time, pagination for large datasets                        |
| **Error Handling**                 | Handles errors gracefully                          | Sends clear error messages, avoids server crashes on bad requests                              |
| **Scalability**                    | Can handle growth / more users/data                | Modular code structure, separate controllers, services, and models                             |
| **Code Quality & Maintainability** | Clean, readable, reusable code                     | Proper folder structure, comments, naming conventions, modular code                            |
| **Integration with Frontend**      | Smooth communication with frontend                 | Successful API calls from frontend, JSON responses match frontend requirements                 |
| **Additional Features / Bonus**    | Extra functionalities implemented                  | File uploads, email notifications, search/filter functionality, logging                        |

---

## Author

**Name:** DOMMARAJU JYOTHSHNA SREE , PRAGATI KUMARI, SAROJ PADHI

**Date:** August 2025



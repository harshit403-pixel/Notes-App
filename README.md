# 📝 Notes App API

A backend Notes Application built using **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

This project provides complete authentication and CRUD functionality for managing notes securely.

---

# 🚀 Features

- User Registration
- User Login & Logout
- JWT Authentication
- Password Hashing with bcrypt
- Cookie-based Authentication
- Create Notes
- Fetch Notes
- Update Notes
- Delete Notes
- MongoDB Integration
- Input Validation
- Error Handling

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cookie-parser
- dotenv

---

# 📁 Project Structure

```bash
Notes-App/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── note.model.js
│   │   └── user.model.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md

```
````md
# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/harshit403-pixel/Notes-App.git
````

Move into the project directory:

```bash
cd Notes-App
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# ▶️ Run the Server

For production:

```bash
npm start
```

For development:

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:3000
```

---

# 📌 API Endpoints

## 🔑 Authentication Routes

### Register User

```http
POST /api/auth/register
```
---

## 📝 Notes Routes

### Create Note

```http
POST /api/notes
```

### Get All Notes

```http
GET /api/notes
```

### Update Note

```http
PATCH /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

---

# 📥 Sample Request Body

## Create Note

```json
{
  "title": "My First Note",
  "description": "This is my first note description"
}
```

---

# ✅ Validation Rules

* Title must contain at least 4 characters
* Description must contain at least 10 characters
* Email must be valid
* Password must be secure

---

# 🔒 Authentication

This project uses:

* JWT Tokens
* HTTP Cookies
* Password Hashing using bcrypt


---

# 📚 Learning Goals

This project was built for practicing:

* REST APIs
* CRUD Operations
* Authentication & Authorization
* JWT Implementation
* MongoDB & Mongoose
* Express Middleware
* Backend Validation
* Secure Cookie Handling
* Error Handling

---

# 🚧 Future Improvements

* Refresh Tokens
* Role-based Authorization
* Search & Filter Notes
* Pagination
* Frontend Integration
* File Upload Support

```
```

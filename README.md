# 🚀 Full Stack TODO Application

## 📚 Project Overview

This is a full-stack web application where users can register, log in, and manage their personal TODO lists.  
There are two types of users based on roles:

- **Admin** (`role = 0`)
- **Client** (`role = 1`)

After successful authentication:

- **Clients** can create, view, and update their TODO lists, and update their personal information.
- **Admins** can view clients' TODO lists and update their own password.

All routing is protected based on user roles to ensure a secure and smooth user experience.

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind CSS
- **Backend:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Zod

---

## ✨ Features

### 🔐 Authentication
- User registration with fields: `name`, `email`, `phone number`, `password`,`role`.
- Login using email and password.
- JWT-based authentication with secure storage.

### 🛡️ Authorization
- Role-based access:
  - **Clients** are redirected to the Client Dashboard.
  - **Admins** are redirected to the Admin Dashboard.
- Unauthorized access is prevented (clients cannot access admin panel and vice-versa).

### 📋 Client Dashboard
- **Create TODO List**: Add new TODO items.
- **View TODO List**: View TODOs in a list view.
- **Profile Management**: Update name, phone number, or password.

### 🛠️ Admin Dashboard
- **View Clients’ TODOs**: Paginated view of all client TODOs (10 records per page).
- **Update Own Password**.

---

## 🗃️ Database Schema

### 🧩 User Model

```javascript
User {
  name: string,
  email: string,
  password: string,
  phone: number,
  role: enum [0, 1] // 0 = Admin, 1 = Client
I have made it clinet as deafult parameter of login and admin for admin login
}
```

### 🧩 TODO Model

```javascript
Todo {
  title: string,
  completed: boolean,
  userId: ObjectId // Reference to User
}
```

---

## 🛡️ Input Validation using Zod

We are using **Zod** to validate incoming user data both at the time of registration and login, ensuring data integrity and preventing invalid data from being stored.

### 📋 Why Zod?
- Provides **schema-based validation**.
- Works seamlessly with **TypeScript** (optional but recommended).
- Ensures the backend receives only properly formatted and safe data.
- Simplifies error handling and form validation on the client side.

### 🔥 Example Usage:

```javascript
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  phoneNumber: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  role: z.enum(['0', '1']),
});

// Validate incoming data
const parsedData = userSchema.safeParse(request.body);

if (!parsedData.success) {
  return response.status(400).json({ errors: parsedData.error.flatten() });
}
```

---

## 🏗️ Project Structure

```
/client (React Frontend)
  /components
  /pages
  /services
  /app.jsx

/server (Express Backend)
  /controllers
  /models
  /routes
  /middlewares
  /jwt
/index.js
```

---

## ⚙️ Setup Instructions

### 📦 Prerequisites
- Node.js installed
- MongoDB running locally or a MongoDB Atlas account

### 📂 Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 📂 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 🔑 Environment Variables

Create a `.env` file inside the `/backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost/5173
```

---

## 🔮 Future Improvements

- Password reset functionality
- Email verification during signup
- Admin ability to delete clients or TODOs
- Real-time notifications using WebSockets

---

# 🎯 Made using React, Express, MongoDB, Tailwind, and Zod!

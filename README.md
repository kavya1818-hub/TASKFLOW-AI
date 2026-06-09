# TaskFlow AI 

TaskFlow AI is a modern full-stack MERN task management application designed to help users manage daily tasks, track productivity, and organize schedules efficiently.

Built using React.js, Node.js, Express.js, and MongoDB with a modern dark-themed UI.

---

# Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Dashboard

## Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* Mark Tasks as Completed
* Task Priority Levels
* Due Date Management

## Dashboard

* Total Tasks
* Completed Tasks
* Pending Tasks
* Overdue Tasks
* Productivity Progress Bar

## Calendar Integration

* View tasks by selected date
* Upcoming deadlines
* Today's reminders

##  Smart Features

* Search Tasks
* High Priority Filter
* Overdue Highlight
* Empty State UI
* Toast Notifications
* Responsive Modern Design

## Settings

* Profile Information
* Theme Toggle
* Productivity Tips
* User Avatar

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM
* Framer Motion
* React Icons
* React Calendar
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

#  Folder Structure

```bash
TASKFLOW-AI/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── README.md
└── .gitignore
```

---

# ⚡ Full Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/taskflow-ai.git
```

---

## 2️⃣ Open Project Folder

```bash
cd TASKFLOW-AI
```

---

# 🔹 Frontend Setup

## Go To Client Folder

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Install Required Packages

```bash
npm install axios react-router-dom react-icons framer-motion react-calendar react-hot-toast
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔹 Backend Setup

## Open New Terminal

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Install Required Packages

```bash
npm install express mongoose cors dotenv bcryptjs jsonwebtoken nodemon
```

## Start Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

#  Environment Variables

Create `.env` file inside `server/`

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

---

# MongoDB Atlas Setup

## Create MongoDB Atlas Account

https://www.mongodb.com/atlas

## Steps

* Create Free Cluster
* Create Database User
* Whitelist IP Address
* Copy MongoDB Connection String

Replace in `.env`

```env
MONGO_URI=your_connection_string
```

---

# Run Full Project

## Terminal 1

```bash
cd server
npm run dev
```

## Terminal 2

```bash
cd client
npm run dev
```

---

# Deployment

## Frontend

Deploy using:

* Vercel

## Backend

Deploy using:

* Render

## Database

Use:

* MongoDB Atlas



# Future Improvements

* Email reminders
* AI productivity suggestions
* Drag and drop tasks
* Team collaboration
* Mobile responsiveness improvements



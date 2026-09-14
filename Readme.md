# Hanumadakshita Evolving Skills Pvt. Ltd.

A modern, responsive **full-stack educational institute website** developed for **Hanumadakshita Evolving Skills Pvt. Ltd.**

The platform provides information about the institute, training programs, courses, skill-development opportunities, and enquiry/contact services through a clean and responsive web interface.

## 🌐 Live Website

**Live Demo:**
https://hanumadakshita.onrender.com/

**GitHub Repository:**
https://github.com/comradevijay/Hanumadakshita

---

## 📌 About the Project

**Hanumadakshita Evolving Skills** is a full-stack web application designed to establish a professional online presence for an educational and skill-development institute.

The application follows a separate **frontend and backend architecture**, allowing the user interface and server-side functionality to be developed and maintained independently.

The website focuses on:

* Institute information
* Courses and training programs
* Skill-development opportunities
* Student-focused content
* Contact and enquiry functionality
* Responsive design across devices
* Backend API integration
* Database-driven content

---

## ✨ Key Features

### 🎓 Educational Platform

* Display available courses and training programs
* Present institute information
* Showcase skill-development opportunities
* Provide structured course information

### 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

### ⚡ Modern User Interface

* Clean and modern design
* Responsive navigation
* Interactive UI elements
* Smooth animations and transitions
* Structured content sections
* Mobile-friendly layouts

### 🔗 Full-Stack Architecture

The application uses a separate frontend and backend:

```text
Frontend
   ↓
React + Vite
   ↓
REST API
   ↓
Node.js + Express
   ↓
MongoDB
```

### 🗄️ Database Integration

MongoDB is used for storing and managing application data through **Mongoose**.

### ⚙️ Environment Configuration

Sensitive configuration values are managed through environment variables instead of being hard-coded into the application.

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose                             |
| ---------- | ----------------------------------- |
| React.js   | User interface                      |
| Vite       | Frontend development and build tool |
| JavaScript | Application logic                   |
| CSS3       | Styling and responsive design       |

### Backend

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| Node.js    | Server-side runtime            |
| Express.js | REST API and backend framework |
| MongoDB    | Database                       |
| Mongoose   | MongoDB object modeling        |

### Development Tools

* Git
* GitHub
* npm
* VS Code
* Render

---

## 📂 Project Structure

```text
Hanumadakshita/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# 🚀 Getting Started

Follow these steps to run the project locally.

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB
* Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/comradevijay/Hanumadakshita.git
```

Navigate into the project:

```bash
cd Hanumadakshita
```

---

# 🎨 Frontend Setup

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using the provided example:

```bash
cp .env.example .env
```

Configure the required frontend environment variables.

Start the development server:

```bash
npm run dev
```

The Vite development server will provide the local URL in the terminal.

---

# ⚙️ Backend Setup

Open another terminal and navigate to the server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Configure the required backend environment variables.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
node server.js
```

If a development script is available:

```bash
npm run dev
```

---

# 🗄️ Database Setup

The project uses **MongoDB** with **Mongoose**.

Make sure MongoDB is running and the connection string is correctly configured in the backend `.env` file.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
```

The project also includes a database seed file:

```text
server/seed.js
```

Run the seed script when initial database data needs to be populated:

```bash
node seed.js
```

---

# 🔐 Environment Variables

Environment variables are used to keep configuration and sensitive credentials outside the source code.

### Client

Create:

```text
client/.env
```

based on:

```text
client/.env.example
```

### Server

Create:

```text
server/.env
```

based on:

```text
server/.env.example
```

Example backend configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

> **Important:** Never commit `.env` files containing passwords, database credentials, API keys, or other sensitive information to GitHub.

---

# 🌍 Deployment

The application is deployed and publicly accessible through **Render**.

### Live Application

https://hanumadakshita.onrender.com/

The deployed application provides the production version of the Hanumadakshita Evolving Skills website.

---

# 🔄 Application Architecture

The project follows a client-server architecture:

```text
                    ┌──────────────────────┐
                    │      User / Browser  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React + Vite       │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Node.js + Express    │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │       Database        │
                    └──────────────────────┘
```

This separation makes the application easier to maintain, develop, test, and deploy.

---

# 📱 Responsive Design

The application is designed with responsive layouts so that users can access the website comfortably on different screen sizes.

Supported devices include:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

---

# 🧩 Main Project Modules

The application contains several major sections for presenting the institute and its services, including:

* Home
* About
* Courses
* Course Details
* Contact
* Enquiry / Application functionality
* Responsive navigation
* Footer and supporting sections

---

# 🧪 Development

During development, the frontend and backend can be run independently.

### Frontend

```bash
cd client
npm run dev
```

### Backend

```bash
cd server
node server.js
```

This setup allows frontend and backend development to happen simultaneously.

---

# 🤝 Contributing

Contributions, improvements, and suggestions are welcome.

### 1. Fork the repository

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make your changes

### 4. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

### 5. Push the branch

```bash
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

---

# 👨‍💻 Developer

### Vijay

GitHub:
https://github.com/comradevijay

---

# 📄 License

This project was developed for **Hanumadakshita Evolving Skills Pvt. Ltd.**

All rights reserved.

---

# ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**Live Website:**
https://hanumadakshita.onrender.com/

**Source Code:**
https://github.com/comradevijay/Hanumadakshita

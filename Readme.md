# Hanumadakshita Evolving Skills Pvt. Ltd.

A full-stack web application developed for **Hanumadakshita Evolving Skills Pvt. Ltd.** The platform is designed to showcase the institute, its training programs, courses, and learning opportunities through a modern and responsive web experience.

## 📌 About the Project

This project is the official website application for **Hanumadakshita Evolving Skills Pvt. Ltd.**, developed with a separate frontend and backend architecture.

The application provides a structured platform to present:

* Institute information
* Available courses and training programs
* Skill development opportunities
* Student-focused learning content
* Contact and enquiry functionality

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Project Structure

```text
Hanumadakshita/
│
├── client/                 # Frontend application
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── package-lock.json
│   └── vite.config.js
│
├── server/                 # Backend application
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── seed.js
│   ├── server.js
│   └── package-lock.json
│
└── README.md
```

---

## ✨ Features

* Responsive and modern user interface
* Course and training program presentation
* Dedicated sections for institute information
* Backend API integration
* Database support for managing application data
* Structured frontend and backend architecture
* Environment variable configuration

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB

---

## 💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/comradevijay/Hanumadakshita.git
```

### 2. Navigate to the project directory

```bash
cd Hanumadakshita
```

---

## 🎨 Frontend Setup

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file based on `.env.example`.

Start the development server:

```bash
npm run dev
```

The frontend application will run on the local development URL provided by Vite.

---

## ⚙️ Backend Setup

Open a new terminal and navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file based on `.env.example` and configure the required environment variables.

Start the server:

```bash
node server.js
```

If a development script is configured, you can also use:

```bash
npm run dev
```

---

## 🔐 Environment Variables

Refer to the `.env.example` files inside the `client` and `server` directories.

Typical backend environment variables may include:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

> Never commit your actual `.env` file or sensitive credentials to GitHub.

---

## 🌱 Database Seeding

The backend includes a `seed.js` file for populating initial data.

Run the seed script according to the configuration defined in the server:

```bash
node seed.js
```

---

## 📱 Responsive Design

The application is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## 🤝 Contributing

Contributions, improvements, and suggestions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add your feature"
```

5. Push to your branch

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request

---

## 📄 License

This project is developed for **Hanumadakshita Evolving Skills Pvt. Ltd.**

All rights reserved.

---

## 👨‍💻 Developer

**Vijay**
GitHub: https://github.com/comradevijay

---

### ⭐ Support

If you find this project useful, consider giving the repository a star ⭐

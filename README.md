# 🔐 Password Manager (MERN Stack)

A simple **Password Manager web application** built using **React, TailwindCSS, Node.js, Express, and MongoDB**.
Users can securely store website credentials and manage them easily.

---

## 🚀 Features

* Save website credentials (Site, Username, Password)
* Copy password to clipboard
* Show / Hide password
* Edit existing passwords
* Delete saved passwords
* Responsive UI
* Backend API with Express
* MongoDB database integration

---

## 🛠 Tech Stack

**Frontend**

* React
* Tailwind CSS
* React Hook Form
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* UUID

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/password-manager.git
cd password-manager
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
PORT=your_port_number
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```
node --watch server.js
```

or

```
nodemon server.js
```

---

### 3️⃣ Setup Frontend

Open another terminal:

```
cd frontend
npm install
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

## 🌐 API Endpoints

| Method | Route         | Description       |
| ------ | ------------- | ----------------- |
| GET    | `/info`       | Get all passwords |
| POST   | `/save`       | Save new password |
| DELETE | `/delete/:id` | Delete password   |

---

## 👨‍💻 Author

**Haazim**

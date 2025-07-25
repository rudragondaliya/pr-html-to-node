# PR HTML to Node

A simple **Node.js + Express + EJS** project to serve HTML pages with EJS templates.
The app is deployed and live at:
**[https://pr-html-to-node.onrender.com](https://pr-html-to-node.onrender.com)**

---

## 🚀 Features

* Node.js with **Express** server
* **EJS** templating engine for dynamic content
* Static files served from `/public`
* Predefined routes:

  * `/` – Home page
  * `/tables` – Tables page
  * `/formWizard` – Form Wizard page
  * `/formBasic` – Basic Form page

---

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd your-project-folder

# Install dependencies
npm install
```

---

## ▶️ Run Locally

```bash
# Start the server
node index.js
```

By default, the app will run on:

```
http://localhost:3000
```

---

## 🌐 Live Demo

The live version of the project is available here:
👉 **[https://pr-html-to-node.onrender.com](https://pr-html-to-node.onrender.com)**

---

## 🛠 Technologies Used

* **Node.js** (Server-side JavaScript runtime)
* **Express.js** (Web framework)
* **EJS** (Embedded JavaScript Templates)
* **Bootstrap** (For frontend UI)

---

## 📂 Project Structure

```
project-folder/
│
├── public/          # Static assets (CSS, JS, images)
├── views/           # EJS templates
│   ├── pages/       # Subpages (tables, forms)
│   └── index.ejs    # Main home page
├── index.js         # Express server
└── package.json     # Node dependencies
```

---

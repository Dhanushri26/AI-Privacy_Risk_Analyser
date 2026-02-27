# 🔐 AI Privacy Risk Analyzer

An AI-powered document analysis system that detects sensitive information, calculates privacy risk scores, and generates redacted outputs.

Built using:

- **Backend:** FastAPI (Python)
- **Frontend:** React (Create React App)
- **UI:** Tailwind CSS

---

# 📁 Project Structure

ai-privacy-analyzer/
│
├── backend/      # FastAPI server
└── frontend/     # React application

---

# 🚀 Backend Setup (FastAPI)

## 1️⃣ Navigate to backend folder

cd backend

## 2️⃣ Create virtual environment

python -m venv venv

## 3️⃣ Activate virtual environment (Windows)

.\venv\Scripts\activate

## 4️⃣ Install dependencies

pip install -r requirements.txt

## 5️⃣ Run backend server

uvicorn app.main:app --reload

Backend will start at:

http://127.0.0.1:8000

API documentation available at:

http://127.0.0.1:8000/docs

---

# 💻 Frontend Setup (React - Create React App)

## 1️⃣ Navigate to frontend folder

cd frontend

## 2️⃣ Install dependencies

npm install

---

# ▶ Available Scripts (Frontend)

In the frontend directory, you can run:

## npm start

Runs the app in development mode.

Open:

http://localhost:3000

The page reloads automatically when you make changes.

---

## npm test

Launches the test runner in interactive watch mode.

---

## npm run build

Builds the app for production in the `build` folder.

- Optimized for performance
- Minified files
- Ready for deployment

---

## npm run eject

⚠ This is a one-way operation.

If you eject, configuration files (Webpack, Babel, ESLint) are copied into your project and cannot be reverted.

---

# 🔄 Full Run Instructions

### Step 1: Start Backend

cd backend  
.\venv\Scripts\activate  
uvicorn app.main:app --reload  

### Step 2: Start Frontend

cd frontend  
npm start  

Now open:

http://localhost:3000

---

# 🧠 Features

- Upload document
- Detect PII & sensitive data
- Generate privacy risk score
- Classify risk level (Low / Medium / High / Critical)
- Analytical dashboard display
- Generate redacted version of text

---

# 🛠 Tech Stack

## Backend
- FastAPI
- Uvicorn
- Python

## Frontend
- React (Create React App)
- Tailwind CSS

---

# 📌 Notes

- Always start backend before frontend.
- If CORS errors occur, check FastAPI CORS middleware.
- Keep environment variables secure in production.

---

# 👩‍💻 Project Purpose

AI-driven system for identifying privacy risks in documents and presenting results in a professional analytical dashboard interface.



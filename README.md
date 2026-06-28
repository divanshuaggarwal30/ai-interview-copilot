# AI Interview Copilot

AI Interview Copilot is a full-stack web application that helps candidates evaluate how well their resume matches a target job description. The application analyzes resumes, calculates a match score, identifies matched and missing skills, stores previous analyses and provides a foundation for AI-powered interview preparation.

---

# Features

## Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- User Profile

## Resume Analysis

- Paste Resume
- Paste Job Description
- Skill Matching
- Match Score Calculation
- Missing Skill Detection
- Matched Skill Detection

## Analysis History

- Save every resume analysis
- View previous analyses
- Match score history
- Missing skills history
- Timestamp for each analysis

## Backend APIs

- User Authentication APIs
- Resume Analysis API
- Analysis History API
- Health API
- Features API

---

# Architecture

```
                Frontend
      (HTML • CSS • JavaScript)
                │
                │ Fetch API
                ▼
        Express.js REST API
                │
        JWT Authentication
                │
                ▼
            MongoDB Atlas
                │
        Users & Analysis Data
```

---

# Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Node.js
- Express.js
- JWT
- bcryptjs
- Mongoose
- CORS
- dotenv

## Database

- MongoDB Atlas

## Version Control

- Git
- GitHub

---

# Folder Structure

```text
ai-interview-copilot/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   └── dashboard.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Analysis.js
│   │
│   ├── routes/
│   │   ├── analyze.js
│   │   ├── history.js
│   │   ├── health.js
│   │   ├── features.js
│   │   ├── login.js
│   │   ├── signup.js
│   │   └── profile.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── docs/
│
├── screenshots/
│
├── .env.example
│
└── README.md
```

---

# Current Workflow

1. User creates an account.
2. User logs in.
3. JWT token is generated.
4. User accesses Dashboard.
5. User submits Resume and Job Description.
6. Backend calculates:
   - Match Score
   - Matched Skills
   - Missing Skills
7. Analysis is saved in MongoDB.
8. Previous analyses are displayed on Dashboard.

---

# API Overview

| Method | Endpoint  | Description          |
| ------ | --------- | -------------------- |
| POST   | /signup   | Register User        |
| POST   | /login    | Login User           |
| GET    | /profile  | Get User Profile     |
| POST   | /analyze  | Analyze Resume       |
| GET    | /history  | Get Analysis History |
| GET    | /health   | Server Status        |
| GET    | /features | Available Features   |

---

# Environment Variables

Create a `.env` file inside the backend folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Future Scope

- AI Resume Parsing
- PDF Resume Upload
- DOCX Resume Upload
- Gemini/OpenAI Integration
- ATS Compatibility Score
- Resume Suggestions
- Personalized Interview Questions
- Voice Mock Interviews
- Company-wise Interview Preparation
- Dashboard Analytics
- Admin Panel
- Email Notifications
- Deployment using Render and Vercel

---

# Repository Documentation

```
docs/
```

Contains:

- API Documentation
- Architecture Diagram
- Database Design
- Development Notes

```
screenshots/
```

Contains:

- Landing Page
- Login Page
- Signup Page
- Dashboard
- Resume Analysis
- Analysis History

---

# Status

Current Phase:

✅ User Authentication

✅ Resume Analysis

✅ MongoDB Integration

✅ JWT Authentication

✅ Persistent Analysis History

🚀 Next Phase:

AI-powered resume parsing and interview preparation.
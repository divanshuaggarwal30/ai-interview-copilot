# AI Interview Copilot

AI Interview Copilot is a full-stack web application that helps candidates evaluate how well their skills and experience align with target job opportunities. The platform analyzes resumes against job descriptions, calculates a job-fit score, identifies matched and missing skills, stores every analysis in MongoDB, and helps users prepare more effectively for interviews.

The objective of the project is to simplify the job application process by providing resume analysis, job matching, persistent analysis history, and interview preparation in one platform.

---

## Problem Statement

Job seekers often struggle to determine whether their resumes match the requirements of a target role. Resume reviews, skill-gap analysis, and interview preparation are usually spread across multiple tools and require significant manual effort.

AI Interview Copilot solves this by providing a centralized application that evaluates resume-to-job compatibility, highlights missing skills, stores previous analyses, and prepares candidates for technical interviews.

---

## Current Features

### Resume & Job Description Analysis

* Resume text input
* Job description text input
* Keyword-based skill matching
* Dynamic match score calculation
* Matched skills identification
* Missing skills detection

### Frontend

* Professional responsive landing page
* Resume analysis workflow
* Analysis history section
* Dynamic result rendering
* Mobile-friendly design
* Fetch API integration

### Backend

* Express.js REST API
* Modular route architecture
* Health endpoint
* Features endpoint
* Resume analysis endpoint
* Analysis history endpoint
* MongoDB integration with Mongoose

### Database

Every resume analysis is stored with:

* Resume text
* Job description
* Match score
* Matched skills
* Missing skills
* Analysis timestamp

### End-to-End Workflow

* User enters resume and job description
* Frontend sends request to backend
* Backend calculates match score
* Analysis is saved to MongoDB
* Response is returned to frontend
* Previous analyses are displayed from the database

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js
* CORS

### Database

* MongoDB
* Mongoose

### Development Tools

* Git
* GitHub

---

## Project Structure

```text
ai-interview-copilot/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── backend/
│   ├── models/
│   │   └── Analysis.js
│   │
│   ├── routes/
│   │   ├── analyze.js
│   │   ├── history.js
│   │   ├── features.js
│   │   └── health.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## Future Enhancements

* PDF and DOCX resume parsing
* AI-powered resume parsing
* Semantic skill matching
* ATS compatibility scoring
* Authentication using JWT
* User accounts
* Personalized interview question generation
* Mock interview simulator
* Progress tracking dashboard
* Deployment on Render and Vercel
# AI Interview Copilot

AI Interview Copilot is a full-stack web application that helps candidates evaluate how well their skills and experience align with target job opportunities. The platform analyzes resumes against job descriptions, calculates a job-fit score, identifies skill gaps, and provides actionable insights to improve interview readiness.

The objective of the project is to simplify the job application process by helping users understand their strengths, identify missing skills, and prepare more effectively for technical and behavioral interviews.

---

## Problem Statement

Job seekers often struggle to determine whether their resumes align with the requirements of a specific role. Resume reviews, skill-gap analysis, and interview preparation are typically fragmented across multiple tools and require significant manual effort.

AI Interview Copilot addresses this challenge by providing a centralized platform that evaluates resume-to-job compatibility, highlights missing skills, and guides candidates toward better interview preparation.

---

## Current Features

### Resume & Job Description Analysis

* Resume text input
* Job description text input
* Keyword-based skill matching
* Automatic match score calculation
* Matched skills identification
* Missing skills detection

### Frontend

* Professional responsive landing page
* Resume analysis workflow
* Dynamic result rendering
* Mobile-friendly design
* Real-time API integration using Fetch

### Backend

* Express.js REST API
* Modular route architecture
* Health monitoring endpoint
* Features endpoint
* Resume analysis endpoint
* JSON-based request and response handling

### End-to-End Workflow

* User submits resume and job description
* Frontend sends data to backend API
* Backend performs keyword matching analysis
* Match score is calculated dynamically
* Results are returned and rendered in the UI

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
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── routes/
│       ├── health.js
│       ├── features.js
│       └── analyze.js
│
└── README.md
```

---

## Planned Enhancements

* Resume parsing for PDF and DOCX files
* Advanced skill extraction engine
* Semantic resume-to-job matching
* MongoDB integration
* User authentication with JWT
* Personalized interview question generation
* AI-powered interview preparation
* Progress tracking dashboard
* User profiles and analytics
* Deployment with cloud infrastructure
# InterviewIQ.AI – AI Interview Agent

InterviewIQ.AI is a full-stack AI-powered interview preparation platform developed during the YUVA Internship. The platform helps users prepare for technical and HR interviews through personalized questions, resume analysis, voice-based interview practice, AI evaluation, performance reports, interview history, and credit-based payments.

The project was developed progressively through four internship phases:

- **Week 1:** Project Planning & System Architecture
- **Week 2:** Front-End Application Development
- **Week 3:** Back-End API Development
- **Week 4:** Front-End and Back-End Integration

---

# Table of Contents

- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Project Structure](#project-structure)
- [Application Flow](#application-flow)
- [Authentication Flow](#authentication-flow)
- [Resume Analysis Flow](#resume-analysis-flow)
- [AI Interview Flow](#ai-interview-flow)
- [Answer Evaluation Flow](#answer-evaluation-flow)
- [Payment Flow](#payment-flow)
- [Frontend](#frontend)
- [Backend](#backend)
- [Database](#database)
- [API Endpoints](#api-endpoints)
- [Frontend Routes](#frontend-routes)
- [Week 1 – Project Planning & System Architecture](#week-1--project-planning--system-architecture)
- [Week 2 – Front-End Application Development](#week-2--front-end-application-development)
- [Week 3 – Back-End API Development](#week-3--back-end-api-development)
- [Week 4 – Front-End and Back-End Integration](#week-4--front-end-and-back-end-integration)
- [API Testing](#api-testing)
- [Error Handling and Integration](#error-handling-and-integration)
- [Environment Variables](#environment-variables)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Development Progress](#development-progress)
- [Future Improvements](#future-improvements)
- [GitHub](#github)
- [Live Application](#live-application)
- [Author](#author)

---

# Project Overview

InterviewIQ.AI is designed as an AI-based interview preparation platform where users can simulate real interview experiences.

The user can:

1. Sign in using Google authentication.
2. Select a job role and experience level.
3. Choose between Technical and HR interviews.
4. Upload a resume if required.
5. Analyze resume information.
6. Generate personalized interview questions.
7. Participate in a timed voice-based interview.
8. Submit answers for evaluation.
9. View performance results.
10. Download an interview report.
11. View previous interview attempts.
12. Purchase additional interview credits using Razorpay.

The project combines a React frontend, Node.js/Express backend, MongoDB database, authentication services, AI services, and payment services into one full-stack application.

---

# Objectives

- Build a practical AI-powered interview preparation platform.
- Create a responsive and user-friendly frontend.
- Develop RESTful backend APIs.
- Connect the frontend with backend services.
- Store users and interview information in MongoDB.
- Implement authentication using Firebase and JWT.
- Process uploaded resumes.
- Generate personalized interview questions using AI.
- Evaluate interview answers.
- Provide detailed interview performance reports.
- Implement interview credits and online payments.
- Practice full-stack development and API integration.

---

# Features

## User Features

- Google Authentication
- User Profile
- Credit Management
- Interview Setup
- Technical Interview
- HR Interview
- Resume Upload
- Resume Analysis
- Personalized Questions
- Voice-Based Interview
- Question Timer
- Answer Submission
- AI-Based Evaluation
- Performance Report
- Interview History
- PDF Report Generation
- Credit Purchase
- Razorpay Payment Integration

## Interview Features

- Role-based interview
- Experience-based interview
- Resume-based personalization
- Technical and HR modes
- Question difficulty
- Time limit for questions
- Voice interaction
- Answer evaluation
- Score calculation
- Confidence evaluation
- Communication evaluation
- Correctness evaluation

---

# Technology Stack

## Frontend

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Redux Toolkit
- React Redux
- Axios
- Firebase
- Recharts
- jsPDF
- jsPDF AutoTable
- React Icons
- Motion
- React Circular Progressbar

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Cookie Parser
- Multer
- Axios
- dotenv
- CORS

## AI

- OpenRouter API
- GPT-4o-mini

## Authentication

- Firebase Authentication
- JWT
- HTTP Cookies

## Payment

- Razorpay

## Development and Testing

- Git
- GitHub
- VS Code
- npm
- Postman

---

# Project Architecture

```text
                    ┌──────────────────────┐
                    │        User          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React Frontend     │
                    │                      │
                    │ Home                 │
                    │ Authentication       │
                    │ Interview Setup      │
                    │ Interview            │
                    │ History              │
                    │ Pricing              │
                    │ Report               │
                    └──────────┬───────────┘
                               │
                         HTTP / Axios
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Node.js + Express    │
                    │      Backend         │
                    ├──────────────────────┤
                    │ Routes               │
                    │ Controllers          │
                    │ Middleware           │
                    │ Services             │
                    └───────┬──────┬───────┘
                            │      │
                ┌───────────┘      └──────────────┐
                ▼                                 ▼
      ┌───────────────────┐             ┌──────────────────┐
      │     MongoDB       │             │ External Services│
      │                   │             │                  │
      │ Users             │             │ OpenRouter       │
      │ Interviews        │             │ Firebase         │
      │ Payments          │             │ Razorpay         │
      └───────────────────┘             └──────────────────┘
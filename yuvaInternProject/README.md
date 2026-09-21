# 🤖 InterviewIQ.AI — AI-Powered Interview Agent

<p align="center">

  <h1 align="center">InterviewIQ.AI</h1>

  <p align="center">
    <b>AI-Powered Mock Interview and Career Preparation Platform</b>
  </p>

  <p align="center">
    Practice interviews • AI-generated questions • Voice interviews • Performance analysis • Interview history
  </p>

</p>

---

## 📌 Project Overview

**InterviewIQ.AI** is an AI-powered interview preparation platform designed to help students and job seekers practice realistic technical and HR interviews.

The platform allows users to:

- 🔐 Sign in using Google Authentication
- 👤 Manage their interview profile and credits
- 🎯 Select their target role and experience
- 📄 Upload a resume for AI-based analysis
- 🤖 Generate personalized interview questions using AI
- 🎤 Participate in voice-based mock interviews
- ⏱️ Answer questions within a defined time limit
- 📊 Receive performance scores and feedback
- 📚 View previous interview history
- 📄 Generate interview performance reports
- 💳 Purchase additional interview credits
- 💰 Use Razorpay for online payments

The project is being developed as part of the **YUVA Internship** program.

---

# 🚀 Project Development Progress

| Week | Task | Status |
|------|------|--------|
| Week 1 | Project Planning & System Architecture | ✅ Completed |
| Week 2 | Front-End Application Development | ✅ Completed |
| Week 3 | Back-End API Development | ✅ Completed |
| Week 4 | Integration / Advanced Development | 🔄 Upcoming |
| Week 5 | Testing & Debugging | 🔄 Upcoming |

---

# 🗂️ Table of Contents

- [Project Overview](#-project-overview)
- [Project Development Progress](#-project-development-progress)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Clone the Repository](#-clone-the-repository)
- [Frontend Setup](#-frontend-setup)
- [Backend Setup](#-backend-setup)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Documentation](#-api-documentation)
- [Authentication Flow](#-authentication-flow)
- [Resume Analysis Flow](#-resume-analysis-flow)
- [AI Question Generation](#-ai-question-generation)
- [Interview Flow](#-interview-flow)
- [Database Design](#-database-design)
- [Payment and Credit System](#-payment-and-credit-system)
- [Frontend Pages](#-frontend-pages)
- [Backend Architecture](#-backend-architecture)
- [API Testing](#-api-testing)
- [Security](#-security)
- [Error Handling](#-error-handling)
- [Installation Summary](#-installation-summary)
- [Development Workflow](#-development-workflow)
- [Challenges and Solutions](#-challenges-and-solutions)
- [Future Improvements](#-future-improvements)
- [YUVA Internship Mapping](#-yuva-internship-mapping)
- [Author](#-author)

---

# ✨ Features

## 🔐 Authentication

- Google Authentication using Firebase
- Backend authentication using JWT
- JWT stored using HTTP cookies
- Protected API routes
- Logout functionality

---

## 👤 User Management

Users can access:

- Name
- Email
- Available interview credits
- Interview history

Each registered user receives default interview credits.

---

## 🎯 Interview Setup

Before starting an interview, the user can select:

- Target Job Role
- Experience
- Interview Type
  - Technical
  - HR
- Optional Resume

Example:

```text
Role:
Full Stack Developer

Experience:
B.Tech in Computer Science & Engineering

Interview Mode:
Technical
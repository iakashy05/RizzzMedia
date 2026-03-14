# Rizzz Media - Premium Digital Marketing Agency

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://rizzz-media.vercel.app/)

A high-performance, full-stack landing page built for modern digital agencies.

## 🚀 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express (Serverless via Vercel)
- **Animations**: CSS Transitions, Magnetic Interactions, Custom Hooks
- **Communication**: Nodemailer (GMAIL integration)
- **Security**: Rate Limiting, Honeypot Spam Protection, Environment Validation

## 📁 Project Structure

```text
/
├── client/          # Vite + React Frontend
├── server/          # Node.js + Express Backend
├── .gitignore       # Global git ignore rules
└── package.json     # Root workspace configuration
```

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js (v16+)
- npm

### 2. Configuration
Create a `.env` file in the `server/` directory based on `.env.example`:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
```

### 3. Installation
From the root directory, run:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

### 4. Running the Project
You can run both the frontend and backend simultaneously using the root command:
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

## ✨ Key Features
- **Branded Preloader**: High-end loading animation for premium first impact.
- **Magnetic Buttons**: Interactive call-to-action elements.
- **Auto-Responder**: Instant email confirmation for new leads.
- **Startup Protection**: Automatic environment variable validation.
- **Responsive Design**: Optimized for everything from mobile up to ultra-wide displays.

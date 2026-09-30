# DevFlow 🚀

A full-stack project and task management platform built for developers.

## Features
- JWT authentication with bcrypt password hashing
- Personal project dashboard
- Project and task CRUD
- Kanban board: Todo → In Progress → Completed
- Drag-and-drop task movement
- Priority, due dates, search and filtering
- Project progress analytics
- Responsive React UI
- REST API with protected routes
- MongoDB persistence

## Stack
React + Vite + Tailwind CSS | Node.js + Express | MongoDB | JWT | bcryptjs

## Run locally
1. Install Node.js 20+ and MongoDB (local) or create a MongoDB Atlas database.
2. `npm install`
3. `npm run install-all`
4. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` and `JWT_SECRET`.
5. `npm run dev`
6. Open http://localhost:5173

## Environment
`PORT=5000`
`MONGO_URI=mongodb://127.0.0.1:27017/devflow`
`JWT_SECRET=replace-with-a-long-random-secret`
`CLIENT_URL=http://localhost:5173`

## API
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
GET/POST /api/projects
GET/PUT/DELETE /api/projects/:id
GET/POST /api/projects/:projectId/tasks
PUT/DELETE /api/tasks/:id

## Suggested LinkedIn description
Built DevFlow, a full-stack project and task management platform with JWT authentication, protected REST APIs, MongoDB persistence, Kanban workflow, drag-and-drop task management and project analytics.

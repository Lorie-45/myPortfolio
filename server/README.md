
# Portfolio Website Backend

This is the backend API for the portfolio website. It provides APIs for managing projects and contact form submissions.

## Features

- RESTful API structure
- MongoDB integration
- Contact form submission handling
- Project management

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact
- `POST /api/contact` - Submit a contact message
- `GET /api/contact` - Get all contact messages
- `PUT /api/contact/:id` - Mark a message as read
- `DELETE /api/contact/:id` - Delete a message

## Setup

1. Install dependencies
```
npm install
```

2. Create a `.env` file with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

3. Start the server
```
npm start
```

4. For development with auto-reload:
```
npm run dev
```

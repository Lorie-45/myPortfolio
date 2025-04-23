# Portfolio Website

A clean and attractive portfolio website built with modern technologies. This project includes a responsive frontend built with React and Tailwind CSS and a backend API with Express, Node.js, and MongoDB.

## Features

- **Responsive Design**: Looks great on all device sizes
- **Modern UI**: Clean and attractive interface with smooth animations
- **Portfolio Showcase**: Display your projects in an organized manner
- **Contact Form**: Allow visitors to send you messages
- **API Integration**: Backend API to manage projects and contact submissions
- **MongoDB Integration**: Store data persistently in MongoDB

## Technologies Used

### Frontend
- React.js
- Tailwind CSS
- CSS Animations

### Backend
- Node.js
- Express.js
- MongoDB

## Project Structure

```
├── public/             # Static assets
├── backend/            # Backend server
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   └── server.js       # Express server setup
├── frontend/           # Frontend source code
│   ├── components/     # React components
│   │   ├── common/     # Common/shared components
│   │   ├── layout/     # Layout components
│   │   └── sections/   # Main page sections
│   ├── pages/          # App pages
│   ├── App.jsx         # Main app component
│   └── index.jsx       # Entry point
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install frontend dependencies
```
cd frontend
npm install
cd ..
```

3. Install backend dependencies
```
cd backend
npm install
cd ..
```

4. Create a `.env` file in the backend directory with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

5. Start the backend server
```
cd backend
npm start
```

6. In a new terminal, start the frontend development server
```
cd frontend
npm run dev
```

7. Open your browser and navigate to `http://localhost:8080`

## Deployment

### Frontend
The frontend can be built for production using:
```
npm run build
```

### Backend
The backend is set up to serve the frontend in production. Set `NODE_ENV=production` in your environment variables.

## License
MIT

## Acknowledgements
- All images used are from [Unsplash](https://unsplash.com/)
- Icons provided by SVG

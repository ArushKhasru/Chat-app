# BakBak - Real-Time Chat Application

BakBak is a modern, real-time chat application built with React, Node.js, and Socket.io. It provides a seamless messaging experience with features like instant messaging, image sharing, online status indicators, and more.

## 🚀 Features

### Core Messaging
- **Real-Time Messaging**: Instant message delivery using Socket.io
- **Image Sharing**: Send and receive images in conversations
- **Message History**: Persistent chat history with timestamps
- **Typing Indicators**: See when others are typing (future enhancement)

### User Management
- **User Authentication**: Secure signup/login with JWT tokens
- **Profile Management**: Update profile pictures and information
- **Online Status**: Real-time online/offline status indicators
- **Contact Management**: View all users and chat partners

### User Experience
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Sound Effects**: Custom keyboard sounds and notification alerts
- **Dark Theme**: Modern dark UI with glassmorphism effects
- **Smooth Animations**: Fluid transitions and loading states

### Security & Performance
- **Rate Limiting**: Protected against abuse with Arcjet
- **Password Security**: Bcrypt hashing for secure password storage
- **Input Validation**: Comprehensive validation for all user inputs
- **CORS Protection**: Secure cross-origin resource sharing

### Additional Features
- **Feedback System**: Users can submit ratings and feedback
- **Email Notifications**: Welcome emails sent upon registration
- **Cloud Storage**: Images stored securely on Cloudinary
- **Database Integration**: MongoDB with Mongoose ODM

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Notification system

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Cloud image storage
- **Resend** - Email service
- **Arcjet** - Security and rate limiting

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Cloudinary account for image storage
- Resend account for email notifications

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Configuration**

   Create `.env` file in the backend directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RESEND_API_KEY=your_resend_api_key
   EMAIL_FROM=your_email@example.com
   EMAIL_FROM_NAME=Your App Name
   ARCJET_KEY=your_arcjet_key
   ARCJET_ENV=development
   ```

4. **Start the application**
   ```bash
   # Start backend (from backend directory)
   npm run dev

   # Start frontend (from frontend directory)
   npm run dev

   #If want to run through backend only then install dist folder into frontend folder
   npm run build
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 🎯 Usage

1. **Sign Up**: Create a new account with email and password
2. **Login**: Authenticate with your credentials
3. **Update Profile**: Upload a profile picture
4. **Start Chatting**: Select a contact or start a new conversation
5. **Send Messages**: Type messages or share images
6. **Real-Time Updates**: See online status and receive instant messages
7. **Sound Settings**: Toggle sound effects in profile settings



## 🤝 If want to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



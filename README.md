# Eventify - Event Management Web Application

Eventify is a modern web application that allows users to create, manage, and attend events seamlessly. It provides real-time RSVP tracking, automated event description generation using AI, and a visually appealing dashboard for managing events.

---

## Features

- **User Authentication:** Secure login and registration system with JWT-based authentication.
- **Event Management:** Users can create, update, and delete events. Each event includes title, description, date, location, capacity, and images.
- **AI-Powered Event Descriptions:** Automatically generate event descriptions using integrated AI LLMs.
- **Image Upload:** Event images are uploaded and hosted on **Cloudinary** for reliability and scalability.
- **Real-Time RSVP Control:** Users can RSVP to events while the system ensures no overbooking via atomic updates.
- **Event Listing & Search:** Browse events with filtering and searching by event name, location, date, and capacity.
- **Dynamic Event Cards:** Interactive and visually appealing cards displaying event details.
- **Owner & Attendee Actions:** Event owners can edit/delete events; attendees can join or leave events.
- **Responsive UI:** Fully responsive frontend designed with modern UI libraries and animations.
- **Notifications & Feedback:** Users receive feedback when attempting to join full events or leave events.

---


## Tech Stack

### Backend
- **Node.js** – JavaScript runtime for server-side logic  
- **Express.js** – Web framework for building REST APIs  
- **MongoDB** – NoSQL database for event and user data  
- **Mongoose** – ODM for MongoDB to manage schema and models  
- **JWT** – JSON Web Tokens for authentication & authorization  
- **Multer** – File uploads for event images  
- **Cloudinary** – Cloud image storage for reliable hosting  
- **CORS** – Handle cross-origin requests  

### Frontend
- **React.js** – UI library for building interactive user interfaces  
- **React Router DOM** – Client-side routing for multi-page navigation  
- **Axios** – HTTP requests to backend APIs  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **Shadcn/ui + Lucide Icons** – Modern component library and icons  

### AI/LLM Features
- Integrated **AI Large Language Models** to generate dynamic event descriptions based on minimal input.  

### Deployment
- **Deployed on Render** – Full-stack application hosted in the cloud for production access.

---



## Technical Explanation

**RSVP Capacity & Concurrency Handling:**  
To prevent overbooking during concurrent RSVP requests, Eventify uses **atomic updates** in MongoDB:

```js
const event = await Event.findOneAndUpdate(
  {
    _id: eventId,
    attendees: { $ne: userId }, // prevent duplicate RSVPs
    $expr: { $lt: [{ $size: "$attendees" }, "$capacity"] } // capacity check
  },
  { $addToSet: { attendees: userId } }, // atomic add
  { new: true }
);

```


# Eventify - Event Management Platform

Eventify is a modern event management web application that allows users to create, manage, and RSVP for events. It includes advanced features like AI-generated event descriptions, real-time RSVP handling with concurrency control, image uploads via Cloudinary, and a beautiful frontend interface.

---

## Running the Application Locally

Follow these steps to set up and run the application on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/eventify.git
cd eventify
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Set up environment variables

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Start the backend server

```bash
npm run dev
```

### 5. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 6. Setup frontend environment variables

```env
VITE_GEMINI_API_KEY=gemini_api
```

### 7. Start the frontend server

```bash
npm run dev
```
---
### Uploads & Images

- Event images are uploaded via **Multer** and stored on **Cloudinary**.
- Make sure your Cloudinary credentials in the `.env` file are correctly set:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Once uploaded, images will be accessible and displayed correctly on the frontend.

The backend serves the image URLs returned by Cloudinary, so no local file paths are used.



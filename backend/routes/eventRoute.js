const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  joinEvent,
  leaveEvent,
  getEventById,
} = require("../controller/eventController");




// Protected routes

// Create event with image
router.post("/", authMiddleware, upload.single("image"), createEvent);

// Update event with image (optional)
router.put("/:id", authMiddleware, upload.single("image"), updateEvent);

router.get("/", authMiddleware, getAllEvents);
router.get("/:id", authMiddleware, getEventById);
router.delete("/:id", authMiddleware, deleteEvent);




// RSVP routes
router.post("/:id/rsvp", authMiddleware, joinEvent);
router.post("/:id/leave", authMiddleware, leaveEvent);


module.exports = router;

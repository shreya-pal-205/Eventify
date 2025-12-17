const Event = require("../model/Event");

// CREATE EVENT
exports.createEvent = async (req, res) => {
  try {
    const { title, description, dateTime, location, capacity } = req.body;

    const eventData = {
      title,
      description,
      dateTime,
      location,
      capacity,
      createdBy: req.user.id,
    };

    // Cloudinary image URL
    if (req.file) {
      eventData.image = req.file.path; // ✅ Cloudinary URL
    }

    const event = await Event.create(eventData);
    res.status(201).json(event);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};








// GET ALL EVENTS
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};






// GET SINGLE EVENT BY ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate("createdBy", "name email");

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event); // image is already full Cloudinary URL
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





exports.updateEvent = async (req, res) => {
  try {
    const { title, description, dateTime, location, capacity } = req.body;

    const updatedData = {
      title,
      description,
      dateTime,
      location,
      capacity,
    };

    if (req.file) {
      updatedData.image = req.file.path; // Cloudinary URL
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



















// DELETE EVENT (Only Creator)
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this event" });
    }

    await event.deleteOne();
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};









// JOIN EVENT (RSVP)
exports.joinEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const userId = req.user.id;

    const event = await Event.findOneAndUpdate(
      {
        _id: eventId,
        attendees: { $ne: userId }, // no duplicate RSVP
        $expr: { $lt: [{ $size: "$attendees" }, "$capacity"] } // capacity check
      },
      {
        $addToSet: { attendees: userId } // atomic add
      },
      { new: true }
    );

    if (!event) {
      return res.status(400).json({
        message: "Event full or already joined"
      });
    }

    res.json({
      message: "Successfully joined the event",
      attendeesCount: event.attendees.length
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};








// LEAVE EVENT
exports.leaveEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const userId = req.user.id;

    const event = await Event.findByIdAndUpdate(
      eventId,
      {
        $pull: { attendees: userId }
      },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({
      message: "Successfully left the event",
      attendeesCount: event.attendees.length
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

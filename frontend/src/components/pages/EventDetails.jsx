import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getEventById,
  updateEvent,
  deleteEvent,
  joinEvent,
  leaveEvent,
} from "@/api/eventApi";
import { Button } from "@/components/ui/button";
import { getUserId } from "@/utils/getUserId";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUserId = getUserId();

  const [event, setEvent] = useState(null);
  const [form, setForm] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // Fetch event on mount
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await getEventById(id);
        const data = res.data;

        setEvent(data);
        setIsOwner(data.createdBy._id === currentUserId);
        setIsJoined(data.attendees.includes(currentUserId));

        setForm({
          title: data.title,
          description: data.description,
          dateTime: data.dateTime.slice(0, 16),
          location: data.location,
          capacity: data.capacity,
          imageFile: null,
        });

        // Correctly set preview image (already full URL from backend)
        if (data.image) {
          setPreviewImage(data.image);
        }
      } catch (err) {
        console.error("Failed to fetch event:", err);
      }
    };

    fetchEvent();
  }, [id, currentUserId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setForm({ ...form, imageFile: files[0] });
      setPreviewImage(URL.createObjectURL(files[0])); // preview selected file
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Update event
  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("location", form.location);
      formData.append("dateTime", form.dateTime);
      formData.append("capacity", form.capacity);
      if (form.imageFile) formData.append("image", form.imageFile);

      await updateEvent(id, formData);
      navigate("/events");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed. Check console for details.");
    }
  };

  // Delete event
  const handleDelete = async () => {
    await deleteEvent(id);
    navigate("/events");
  };

  // Join event
  const handleJoin = async () => {
    await joinEvent(id);
    setEvent({
      ...event,
      attendees: [...event.attendees, currentUserId],
    });
    setIsJoined(true);
  };

  // Leave event
  const handleLeave = async () => {
    await leaveEvent(id);
    setEvent({
      ...event,
      attendees: event.attendees.filter((u) => u !== currentUserId),
    });
    setIsJoined(false);
  };

  if (!event) return null;

  const isFull = event.attendees.length >= event.capacity;

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F7F7F7] px-4 py-8">
      <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-lg space-y-6">

        {/* IMAGE UPLOAD FOR OWNER */}
        {isOwner && (
          <div>
            <label className="block mb-2 font-semibold">Event Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        )}

        {/* IMAGE PREVIEW */}
        {previewImage && (
          <img
            src={previewImage}
            alt="event"
            className="w-full h-64 object-cover rounded-md border"
          />
        )}

        {/* TITLE */}
        {isOwner ? (
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded text-xl font-semibold"
          />
        ) : (
          <h2 className="text-2xl font-bold">{event.title}</h2>
        )}

        {/* DESCRIPTION */}
        {isOwner ? (
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ) : (
          <p className="text-gray-700">{event.description}</p>
        )}

        {/* LOCATION */}
        {isOwner ? (
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ) : (
          <p className="text-gray-600">📍 {event.location}</p>
        )}

        {/* DATE */}
        {isOwner ? (
          <input
            type="datetime-local"
            name="dateTime"
            value={form.dateTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ) : (
          <p className="text-gray-600">🗓 {new Date(event.dateTime).toLocaleString()}</p>
        )}

        {/* CAPACITY */}
        {isOwner ? (
          <input
            type="number"
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ) : (
          <p className="text-gray-600">
            👥 {event.attendees.length} / {event.capacity} attending
          </p>
        )}

        {/* OWNER ACTIONS */}
        {isOwner && (
          <div className="flex gap-3 pt-4">
            <Button onClick={handleUpdate} className="bg-indigo-600 hover:bg-indigo-700">
              Update
            </Button>
            <Button onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </Button>
          </div>
        )}

        {/* RSVP ACTIONS FOR NON-OWNER */}
        {!isOwner && (
          <div className="pt-4">
            {isJoined ? (
              <Button onClick={handleLeave} className="w-full bg-red-600 hover:bg-red-700">
                Leave Event
              </Button>
            ) : (
              <Button
                onClick={handleJoin}
                disabled={isFull}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
              >
                {isFull ? "Event Full" : "Join Event"}
              </Button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default EventDetails;

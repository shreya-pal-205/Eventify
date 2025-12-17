import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById, updateEvent } from "@/api/eventApi";
import { Button } from "@/components/ui/button";
import { getUserId } from "@/utils/getUserId";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUserId = getUserId();

  const [form, setForm] = useState({
    title: "",
    description: "",
    dateTime: "",
    location: "",
    capacity: "",
  });

  const [loading, setLoading] = useState(true);
  const [unauthorized, setUnauthorized] = useState(false);

  // Fetch event & verify ownership
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await getEventById(id);
        const event = res.data;

        // 🔐 AUTH CHECK
        if (event.createdBy._id !== currentUserId) {
          setUnauthorized(true);
          return;
        }

        setForm({
          title: event.title,
          description: event.description,
          dateTime: event.dateTime.slice(0, 16),
          location: event.location,
          capacity: event.capacity,
        });

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id, currentUserId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(id, form);
      navigate("/events");
    } catch (err) {
      console.error(err);
    }
  };

  // ⏳ Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  // 🚫 Unauthorized view
  if (unauthorized) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F7F7]">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Not Authorized
        </h2>
        <p className="mb-6 text-gray-600">
          You are not allowed to update this event.
        </p>
        <Button onClick={() => navigate("/events")}>
          Go Back
        </Button>
      </div>
    );
  }

  // ✅ Update Form (CREATOR ONLY)
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F7F7F7] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#854836] p-8 rounded-xl w-full max-w-lg text-white shadow-lg"
      >
        <h2 className="text-2xl font-bold text-[#FFB22C] mb-6 text-center">
          Update Event
        </h2>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-4 p-2 rounded text-black"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 p-2 rounded text-black"
          required
        />

        <input
          type="datetime-local"
          name="dateTime"
          value={form.dateTime}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded text-black"
          required
        />

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full mb-4 p-2 rounded text-black"
          required
        />

        <input
          type="number"
          name="capacity"
          value={form.capacity}
          onChange={handleChange}
          placeholder="Capacity"
          className="w-full mb-4 p-2 rounded text-black"
          required
        />

        <Button type="submit" className="bg-indigo-600 w-full">
          Update Event
        </Button>
      </form>
    </div>
  );
};

export default UpdateEvent;

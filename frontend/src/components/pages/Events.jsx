import { useEffect, useState } from "react";
import { deleteEvent, getEvents } from "@/api/eventApi";
import EventCard from "../EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const fetchEvents = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await deleteEvent(id);
      fetchEvents();
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔍 FILTER LOGIC
  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      event.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-[#F7F7F7] p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center text-[#000000] mb-6">
        Upcoming Events
      </h1>

      {/* SEARCH & FILTER */}
      <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="🔍 Search by event name"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="p-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFB22C]"
        />

        <input
          type="text"
          placeholder="📍 Search by location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="p-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFB22C]"
        />
      </div>

      {/* EVENTS GRID */}
      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-600">
          No events found matching your search.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;

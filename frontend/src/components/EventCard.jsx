import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      
      {/* IMAGE */}
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="h-40 w-full object-cover rounded-lg mb-4"
        />
      )}

      <h2 className="text-xl font-bold">{event.title}</h2>

      <p className="text-gray-600 mt-2">
        {event.description.slice(0, 80)}...
      </p>

      <p className="mt-2">📍 {event.location}</p>
      <p>👥 Capacity: {event.capacity}</p>

      {/* CREATOR NAME */}
      {event.createdBy?.name && (
        <p className="mt-2 text-sm text-gray-500">
          👤 Created by: <span className="font-medium">{event.createdBy.name}</span>
        </p>
      )}

      <Link to={`/events/${event._id}`}>
        <Button className="mt-4 w-full bg-[#FFB22C] text-black">
          👁 View Event
        </Button>
      </Link>
    </div>
  );
};

export default EventCard;

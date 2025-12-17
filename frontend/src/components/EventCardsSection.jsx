const EventCardsSection = () => {
  const sampleEvents = [
    {
      id: 1,
      title: "Beach Wedding",
      location: "Malibu, CA",
      capacity: 100,
      description: "Celebrate love by the ocean with a stunning sunset.",
      image: "https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp",
    },
    {
      id: 2,
      title: "Birthday Bash",
      location: "New York, NY",
      capacity: 50,
      description: "Fun-filled birthday party with friends and family.",
      image: "https://www.partyone.in/img/category_landing/artists/balloon_decor.webp",
    },
    {
      id: 3,
      title: "Corporate Meetup",
      location: "San Francisco, CA",
      capacity: 200,
      description: "Professional networking and learning event.",
      image: "https://5.imimg.com/data5/TY/DC/EE/SELLER-3773186/corporate-event-planning.JPG",
    },
    {
      id: 4,
      title: "Birthday Party",
      location: "Malibu, CA",
      capacity: 100,
      description: "Celebrate love by the ocean with a stunning sunset.",
      image: "https://content.jdmagicbox.com/v2/comp/delhi/x6/011pxx11.xx11.160902164416.s3x6/catalogue/dkg-party-events-greater-noida-noida-balloon-decorators-m1gh2qga7j.jpg",
    },
    {
      id: 5,
      title: "Beach Wedding",
      location: "Malibu, CA",
      capacity: 100,
      description: "Celebrate love by the ocean with a stunning sunset.",
      image: "https://sunandseabeachweddings.com/wp-content/uploads/2020/01/034-1.jpg",
    },
    {
      id: 6,
      title: "Engagement Ceremony",
      location: "Malibu, CA",
      capacity: 100,
      description: "Celebrate love by the ocean with a stunning sunset.",
      image: "https://image.cdn.shpy.in/337348/1706011707403_SKU-1042_1.jpg?width=600&format=webp",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#F0E6E0]">
      <h2 className="text-3xl font-bold text-center text-[#854836] mb-10">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {sampleEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#854836]">{event.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{event.description}</p>
              <p className="mt-2 text-sm text-[#854836]">📍 {event.location}</p>
              <p className="text-sm font-medium mt-1">👥 Capacity: {event.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCardsSection;

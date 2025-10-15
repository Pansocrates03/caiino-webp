import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";

export default function EventPage() {
  const sortedEvents = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Eventos
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedEvents.map((event) => (
          <EventCard key={event.id} item={event} />
        ))}
      </div>
    </div>
  );
}
import { HeroSection } from "../components/features/home/HeroSection";
import { EventCard } from "../components/features/events/EventCard";
import { RideCard } from "../components/features/rides/RideCard";

const upcomingEvents = [
  {
    title: "Weekend Mountain Trail",
    date: "Sept 15, 2025",
    location: "Blue Mountain Range",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Join us for an exciting mountain trail ride through scenic routes."
  },
  {
    title: "City Night Ride",
    date: "Sept 20, 2025",
    location: "Downtown Circuit",
    image: "https://images.unsplash.com/photo-1597776776684-61122dcf84e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    description: "Experience the city lights on our monthly night ride event."
  },
  {
    title: "Beginner's Workshop",
    date: "Sept 25, 2025",
    location: "Central Park",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Learn essential biking skills and safety measures."
  }
];

const featuredRides = [
  {
    title: "Coastal Adventure",
    distance: "45 km",
    duration: "3 hours",
    difficulty: "Moderate" as const,
    image: "https://images.unsplash.com/photo-1623604288694-d15c2a76c681?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Forest Trail",
    distance: "30 km",
    duration: "2 hours",
    difficulty: "Easy" as const,
    image: "https://images.unsplash.com/photo-1544191696-102ad5633098?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Mountain Challenge",
    distance: "60 km",
    duration: "5 hours",
    difficulty: "Hard" as const,
    image: "https://images.unsplash.com/photo-1506389516061-3c6de0e1f2ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export function Welcome() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Join the Ultimate Biking Community"
        description="Connect with fellow riders, discover exciting trails, and participate in thrilling events. Whether you're a beginner or a pro, there's a place for you in our community."
        ctaText="Join Now"
        ctaLink="/signup"
        backgroundImage="https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      {/* Featured Rides Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Rides</h2>
          <p className="text-gray-600 text-center mb-12">Explore our most popular biking routes and trails</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRides.map((ride) => (
              <RideCard key={ride.title} {...ride} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Monthly Rides</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Unique Routes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Upcoming Events</h2>
          <p className="text-gray-600 text-center mb-12">Don't miss out on our exciting community events</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get access to exclusive events, connect with fellow riders, and discover new trails.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/signup" className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors">
              Sign Up Now
            </a>
            <a href="/about" className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

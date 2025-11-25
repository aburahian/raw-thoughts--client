import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl  text-[#fab12a] font-bold mb-4">About Us</h1>
        <div className="border-b border-[#fab12a] my-9"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to My Blog! We are dedicated to sharing the latest insights,
          tips, and stories to keep you informed and inspired.
        </p>
      </div>

      {/* Mission */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to provide high-quality, up-to-date content for
            readers who love to learn and explore new ideas. We focus on hot
            topics, productivity tips, and actionable insights you can apply in
            your daily life.
          </p>
        </div>
        <div className="md:w-1/2 relative w-full h-64 md:h-80">
          <Image
            src="https://i.ibb.co.com/s95Kr7X1/technology-communication-icons-symbols-concept-53876-120314.jpg"
            alt="Mission"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Abu",
              role: "Founder & Writer",
              avatar: "https://i.pravatar.cc/150?img=1",
            },
            {
              name: "Sarah",
              role: "Editor",
              avatar: "https://i.pravatar.cc/150?img=2",
            },
            {
              name: "Mike",
              role: "Content Creator",
              avatar: "https://i.pravatar.cc/150?img=3",
            },
            {
              name: "Lina",
              role: "Designer",
              avatar: "https://i.pravatar.cc/150?img=4",
            },
          ].map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full shadow-lg"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

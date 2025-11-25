"use client";
import Marquee from "react-fast-marquee";
const rapidReads = [
  {
    title: "Discover the latest place",
    desc: "Check out the hottest spots this week!",
  },
  {
    title: "Boost your productivity",
    desc: "Tips and tricks to level up fast.",
  },
  {
    title: "Learn new skills today",
    desc: "Short courses and tutorials curated for you.",
  },
  {
    title: "Hot Take Analysis",
    desc: "Deep insights on trending topics.",
  },
];

export default function RapidReads() {
  return (
    <div className="font-sans">
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl  text-[#fab12a] font-bold mb-8 text-center">Rapid Reads</h2>
        <div className="border-b border-[#fab12a] my-9"></div>
        <Marquee>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rapidReads.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
}

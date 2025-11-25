
import Link from "next/link";
import Image from "next/image";


const categories = [
  {
    id: 1,
    name: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Productivity",
    imageUrl:
      "https://i.ibb.co.com/67RQ2Wdn/images-q-tbn-ANd9-Gc-T7-U4-Sz04-Yl-YEui-O4-Jar-Rcp0m-RNte299-cx-Ug-s.jpg",
  },
  {
    id: 3,
    name: "Health & Fitness",
    imageUrl:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Travel",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Lifestyle",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CategoriesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl  text-[#fab12a] font-bold mb-4">Categories</h1>
        <div className="border-b border-[#fab12a] my-9"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore blogs by category and discover content that matters to you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-white flex-1 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

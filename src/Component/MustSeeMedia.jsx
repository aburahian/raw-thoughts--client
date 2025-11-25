import axios from "axios";
import Image from "next/image";

export default async function MustSeeMedia() {
  const res = await axios("https://raw-thoughts.vercel.app/must-see-media");
  const mustSeeMedia = res.data;

  return (
    <div className="font-sans">
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl  text-[#fab12a] font-bold mb-8 text-center">
          Must-See Media
        </h2>
        <div className="border-b border-[#fab12a] my-9"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mustSeeMedia.map((blog, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={blog.imageUrl || ""}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

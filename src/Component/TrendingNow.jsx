import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function LandingPage() {
  const res = await axios("https://raw-thoughts.vercel.app/latest-blog");
  const trendingBlogs = res.data;

  return (
    <div className="font-sans">
      <section className=" px-4 py-16">
        <h2 className="text-3xl  text-[#fab12a] font-bold mb-8">
          Trending Now
        </h2>
        <div className="border-b border-[#fab12a] my-9"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingBlogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md flex flex-col
              justify-between overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48">
                {blog.imageUrl ? (
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 ">{blog?.title}</h3>
                <p className="text-gray-600 truncate" title={blog.shortDesc}>
                  {blog?.shortDesc}
                </p>
              </div>
              <div className="my-6 p-4">
                <Link
                  href={`/blogs/${blog._id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

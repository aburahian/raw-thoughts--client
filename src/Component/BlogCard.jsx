"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden max-w-sm mx-auto h-full">
      {blog.imageUrl ? (
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ) : (
        <div className="bg-gray-200 w-full h-48 sm:h-56 md:h-64 flex items-center justify-center">
          <span className="text-gray-500">No image</span>
        </div>
      )}

      <div className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold line-clamp-2">
            {blog.title}
          </h1>

          {blog.category && (
            <p className="text-sm text-gray-500 uppercase">{blog.category}</p>
          )}

          <p className="text-gray-700 text-sm line-clamp-4">{blog.shortDesc}</p>
        </div>

        <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
          <span>{blog.authorName}</span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="mt-4">
          <Link
            href={`/blogs/${blog._id}`}
            className="btn  bg-[#fab12a] w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

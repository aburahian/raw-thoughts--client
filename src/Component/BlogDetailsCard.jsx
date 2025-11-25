import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogDetailsCard({ blog }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 font-sans">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      {blog.imageUrl && (
        <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {blog.source && (
        <a
          href={blog.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt underline"
        >
          Read more at source
        </a>
      )}
      <p className="text-gray-700 mb-8 whitespace-pre-line">{blog.fullDesc}</p>

      <Link
        href="/blogs"
        className="inline-block text-[#fab12a] font-medium hover:underline"
      >
        ← Back to Blogs
      </Link>
    </section>
  );
}

export default BlogDetailsCard;

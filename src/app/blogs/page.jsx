import BlogCard from "@/Component/BlogCard";
import axios from "axios";
import React from "react";

async function page(props) {
  const data = await axios("https://raw-thoughts.vercel.app/blogs");
  const blogs = data.data;

  return (
    <div className="px-4 py-16">
      <h1 className="text-3xl  text-[#fab12a] font-bold mb-8">All Blogs</h1>
      <div className="border-b border-[#fab12a] my-9"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default page;

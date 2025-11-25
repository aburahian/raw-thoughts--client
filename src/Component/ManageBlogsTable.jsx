"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

export default function ManageBlogsTable({ blogs }) {
  const [blogList, setBlogList] = useState(blogs);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`https://raw-thoughts.vercel.app/blogs/${id}`);
        setBlogList(blogList.filter((b) => b._id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Your blog has been deleted.",
          icon: "success",
        });
      } catch (err) {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the blog.",
          icon: "error",
        });
      }
    }
  };
  return (
    <section className="mx-auto px-4 py-16 font-sans">
      <h1 className="text-3xl  text-[#fab12a] font-bold mb-8">Manage Blogs</h1>
      <div className="border-b border-[#fab12a] my-9"></div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogList.map((blog) => (
              <tr
                key={blog._id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">{blog.title}</td>
                <td className="px-4 py-3">{blog.category || "-"}</td>
                <td className="px-4 py-3">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-center space-x-2">
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {blogList.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

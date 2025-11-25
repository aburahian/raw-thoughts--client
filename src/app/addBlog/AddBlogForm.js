"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

export default function AddBlog() {
  const { register, handleSubmit, reset } = useForm();
  const { user, isLoaded } = useUser();

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      authorName: user.fullName,
      authorEmail: user.emailAddresses[0]?.emailAddress,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await axios.post(
        "https://raw-thoughts.vercel.app/blogs",
        newData
      );
      console.log("Saved:", res.data);
      if (res.data.insertedId) {
        toast.success("Successfully posted!");
        alert("Blog posted!");
        reset();
      }
    } catch (err) {
      console.log(err);
      toast.error("Error posting blog");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <fieldset className="space-y-4">
          <label className="label font-semibold text-black">Title</label>
          <input
            {...register("title", { required: true })}
            className="input input-bordered w-full"
            placeholder="Title"
          />

          <label className="label font-semibold text-black">
            Category (Optional)
          </label>
          <select
            {...register("category")}
            className="select select-bordered w-full"
            defaultValue=""
          >
            <option value="">No category</option>
            <option value="Tech">Tech</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Travel">Health</option>
            <option value="Education">Education</option>
            <option value="Education">Business</option>
            <option value="Food">Food</option>
            <option value="Food">Finance</option>
            <option value="Food">Sport</option>
          </select>

          <label className="label font-semibold text-black">
            Short Description
          </label>
          <textarea
            {...register("shortDesc")}
            className="textarea textarea-bordered w-full resize-none"
            placeholder="Short Description"
            rows={3}
          />

          <label className="label font-semibold text-black">
            Full Description
          </label>
          <textarea
            {...register("fullDesc")}
            className="textarea textarea-bordered w-full resize-y min-h-[150px] max-h-[400px] overflow-y-auto"
            placeholder="Write your blog content here..."
          ></textarea>

          <label className="label font-semibold text-black">Image URL</label>
          <input
            type="text"
            {...register("imageUrl", { required: true })}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
          />

          <label className="label font-semibold text-black">
            Source (Optional)
          </label>
          <input
            {...register("source")}
            className="input input-bordered w-full"
            type="text"
            placeholder="Source"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors">
            Publish Blog
          </button>
        </fieldset>
      </form>
    </div>
  );
}

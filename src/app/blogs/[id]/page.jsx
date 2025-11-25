import axios from "axios";
import BlogDetailsCard from "@/Component/BlogDetailsCard";

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;


  const { data: blog } = await axios(
    `https://raw-thoughts.vercel.app/blogs/${id}`
  );

  if (!blog) {
    return <p className="text-center py-16">Blog not found.</p>;
  }

  return <BlogDetailsCard blog={blog}></BlogDetailsCard>;
}

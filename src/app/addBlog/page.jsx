import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddBlogForm from "./AddBlogForm";

export default async function AddBlogPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/logIn"); 
  }

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl  text-[#fab12a] font-bold mb-6 text-center">Add a New Blog</h1>
      <AddBlogForm />
    </div>
  );
}

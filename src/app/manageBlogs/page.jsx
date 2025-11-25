import { auth, currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";
import ManageBlogsTable from "@/Component/ManageBlogsTable";

export default async function ManageBlogs() {
  const { userId } = await auth();
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  if (!userId) redirect("/logIn");

  const { data: blogs } = await axios.get(
    `https://raw-thoughts.vercel.app/blogs/?email=${email}`
  );

  return <ManageBlogsTable blogs={blogs}></ManageBlogsTable>;
}

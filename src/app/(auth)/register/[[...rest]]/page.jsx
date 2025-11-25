import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SignUpClient from "./SignUpClient";

export default async function RegisterPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/"); 
  }

  return (
    <div className="flex justify-center mt-14 mb-14">
      <SignUpClient />
    </div>
  );
}

// app/logIn/page.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SignInClient from "./SignInClient";

export default async function LogInPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="flex justify-center mt-14 mb-14">
      <SignInClient />
    </div>
  );
}

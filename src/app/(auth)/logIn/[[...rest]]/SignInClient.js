"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInClient() {
  return <SignIn path="/logIn" routing="path" signUpUrl="/register" />;
}

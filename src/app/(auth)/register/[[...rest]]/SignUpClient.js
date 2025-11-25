"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpClient() {
  return <SignUp path="/register" routing="path" signInUrl="/logIn" />;
}

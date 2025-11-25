// src/middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Public routes
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware({
  // You can define custom authorization logic here
  async afterAuth(auth, req) {
    const { userId } = auth;

    // If not logged in and route is not public, redirect to /sign-in
    if (!userId && !isPublicRoute(req)) {
      return NextResponse.redirect(new URL("/logIn", req.url));
    }

    // Otherwise let the request continue
    return NextResponse.next();
  },
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Protect all pages except Next.js internals & static files
    "/api/:path*", // Protect all API routes
  ],
};

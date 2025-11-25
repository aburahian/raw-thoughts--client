import {
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "@/Component/NavLinks";
async function Navbar(props) {
  const user = await currentUser();

  const link = <NavLinks></NavLinks>
  return (
    <div className=" bg-[#fab12a] shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost  text-xl">
            Raw Thoughts
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={user?.imageUrl}
                    alt={user?.fullName || "User avatar"}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <ul className="dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-44 text-center">
                <li className="font-semibold my-2">
                  <UserButton></UserButton>
                </li>
                <li className="font-semibold my-2">{user?.fullName}</li>
                <li className="font-semibold my-2">
                  <Link href="/addBlog">Add Blog</Link>
                </li>
                <li className="font-semibold my-2">
                  <Link href="/manageBlogs">Manage Blogs</Link>
                </li>
                <li>
                  <SignOutButton>
                    <button className="btn bg-[#fab12a]">Sign Out</button>
                  </SignOutButton>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <SignInButton className="btn bg-[#fab12a]"></SignInButton>
              <SignUpButton className="btn mx-3.5 bg-[#fab12a]"></SignUpButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;

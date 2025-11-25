import React from "react";

function Footer(props) {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input  join-item"
              />
              <button className="btn bg-[#fab12a] join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="py-6 text-center w-full border-t border-neutral-content pt-4 text-neutral-focus text-sm">
        © {new Date().getFullYear()} Raw Thoughts. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;

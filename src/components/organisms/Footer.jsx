import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="left-side__footer">
        <p className="softlore-mark title">&copy; 2022 Soft-Lore, Inc.</p>
        <span className="privacy-footer title">
          privacy
        </span>
        <span className="contact-footer title">
          Contact Us
        </span>
      </div>
      <div className="right-side__footer">
        <span className="facebook-icon icon__footer">
          <FaFacebook />
        </span>
        <span className="github-icon icon__footer">
          <FaGithub />
        </span>
        <span className="instagram-icon icon__footer">
          <FaInstagram />
        </span>
        <span className="linkedin-icon icon__footer">
          <FaLinkedin />
        </span>
      </div>
    </footer>
  )
}

import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Link className="footer-link" href="/contact">
        CONTACT
      </Link>
      <Link className="footer-link" href="/terms">
        TERMS
      </Link>
      <div className="footer-link row" href="#">
        <FaFacebook className="col-3" size="1.2rem" role="button" />
        <FaTiktok className="col-3" size="1.2rem" role="button"/>
        <FaInstagram className="col-3" size="1.2rem" role="button"/>
      </div>
    </footer>
  );
}

import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="row mx-3"> 
      <Link className="footer-link col-3" href="/contact">
        CONTACT
      </Link>
      <Link className="footer-link col-3" href="/terms">
        TERMS
      </Link>
      <div className="footer-link col-6  row" href="#">
        <FaFacebook className="col-3" size="1.8rem" role="button" />
        <FaTiktok className="col-3" size="1.8rem" role="button"/>
        <FaInstagram className="col-3" size="1.8rem" role="button"/>
      </div>
    </footer>
  );
}

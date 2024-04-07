import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Link className="footer-link" href="/contact">
        CONTACT
      </Link>
      <Link className="footer-link" href="/terms">
        TERMS
      </Link>
      <Link className="footer-link" href="#">
        INSTAGRAM
      </Link>
    </footer>
  );
}

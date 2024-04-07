"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Card from "./Card";

export default function Header() {
  let path = usePathname();
  const navigation = useRouter();
  const [dataStorage, setDataStorage] = useState([]);

  useEffect(() => {
    // set the initial theme value when component mounts
    // but only when the window object is defined
    if (typeof window === undefined) return;

    setDataStorage(localStorage.getItem("article"));
  }, []);

  if (typeof window !== "undefined" && window) {
    let Nav = window.document.querySelector("nav");
    let MenuBtn = document.querySelector(".menu-btn");

    if (Nav) {
      const Menu = document.querySelector("#menu");
      if (path !== "/") {
        Nav.classList.add("navShadow");
        MenuBtn.classList.add("rotateNav");
        MenuBtn.addEventListener("click", () => {
          MenuBtn.classList.remove("rotateNav");
          navigation.push("/");
        });
      } else {
        Nav.classList.remove("navShadow");
      }
    } else {
      navigation.push("/");
    }
  }

  return (
    <header>
      {/* shopping-cart.svg */}
      <nav>
        <div id="menu">
          <div className="menu-btn" id="logo">
            <div className="button">
              <Link className="header-link" href="/video">
                VIDEOS
              </Link>
            </div>
            <div className="button">
              <Link className="header-link" href="/clothing">
                CLOTHING
              </Link>
            </div>
            <div className="button">
              <Link className="header-link" href="accessoire">
                ACCESSOIRIES
              </Link>
            </div>
            <div className="button">
              <Link className="header-link" href="/lookBook">
                LOOKBOOK
              </Link>
            </div>
          </div>
          <div className="logo">
            <Card />
          </div>
        </div>
      </nav>
    </header>
  );
}

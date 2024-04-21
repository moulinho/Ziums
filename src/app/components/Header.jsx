"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Card from "./Card";

export default function Header() {
  let path = usePathname();
  const navigation = useRouter();
  const [dataStorage, setDataStorage] = useState([]);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    // set the initial theme value when component mounts
    // but only when the window object is defined
    if (typeof window === undefined) return;

    setDataStorage(localStorage.getItem("article"));
  }, []);

  if (typeof window !== "undefined" && window) {
    var audio = document.getElementById("audio_tag");
    // var audio = new Audio("")
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
    <header
      onClick={() => {
        play ? audio.play() : null;
        setPlay(false);
        // console.log("play", play);
      }}
      // onClick={() => {
      //   setPlay(false);
      //   play ? audio.pause() : null;
      //   console.log("paused", play);
      // }}
    >
      {/* shopping-cart.svg */}
      <nav id="player">
        {/* <audio
          volume="0.4"
          controls
          id="audio_tag"
          loop
          style={{
            position: "absolute",
            width: "120px",
            height: "25%",
            top: "-100px",
            left: "10px",
          }}
        >
          <source src="/ZIUM_BACKGROUND-SOUNDS.mp3" type="audio/mpeg" />
        </audio> */}
        <div id="menu">
          
          <audio
            controls
            volume="0.4"
            id="audio_tag"
            loop
            className="logo"
            style={{
              position: "absolute",
              width: "100px",
              height: "25%",
              top: "10px",
              left: "10px",
            }}
          >
            <source src="/ZIUM_BACKGROUND-SOUNDS.mp3" type="audio/mpeg" />
          </audio>
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
                ACCESSORIES
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

"use client";
import React from "react";
import Image from "next/image";
import Accessoire1 from "../../../public/pexels-dom-j-45057-removebg-preview@2x.png";
import Accessoire2 from "../../../public/pexels-godisable-jacob-1191536-removebg-preview@2x.png";
import Accessoire3 from "../../../public/pexels-jude-stevens-984619-removebg-preview-1@2x.png";
import Accessoire4 from "../../../public/pexels-marta-branco-1395306-removebg-preview@2x.png";
import Accessoire5 from "../../../public/pexels-jude-stevens-984619-removebg-preview-1@2x.png";
import Accessoire6 from "../../../public/pexels-cottonbro-studio-6662322-removebg-preview@2x.png";

function Accessoir() {
  return (
    <div className="accessoir">
      <div className="img">
        <Image
          src={Accessoire1}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Accessoire2}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Accessoire3}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Accessoire4}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Accessoire5}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Accessoire6}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default Accessoir;

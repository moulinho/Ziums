"use client";
import React from "react";
import Image from "next/image";
import Clothing1 from "../../../public/pexels-godisable-jacob-914664-removebg-preview@2x.png";
import Clothing2 from "../../../public/pexels-engin-akyurt-3687550-removebg-preview@2x.png";
import Clothing3 from "../../../public/pexels-godisable-jacob-914668-removebg-preview@2x.png";
import Clothing4 from "../../../public/pexels-cottonbro-studio-9154696-removebg-preview@2x.png";
import Clothing5 from "../../../public/pexels-cottonbro-studio-10679171-removebg-preview@2x.png";
import Clothing6 from "../../../public/pexels-timothy-paule-ii-2002717-removebg-preview@2x.png";
import Link from "next/link";

export default function detail() {
  return (
    <div className="vetement">
      <div className="img">
        <Link href="/clothing/detailClothing">
          <Image
            src={Clothing1}
            alt="Groupe de masques"
            style={{ objectFit: "contain" }}
          />
        </Link>
        <Image
          src={Clothing2}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Clothing3}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Clothing4}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Clothing5}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={Clothing6}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

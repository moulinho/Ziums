import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import lookBook1 from "../../../public/pexels-marta-branco-1395306@2x.png";
import lookBook2 from "../../../public/pexels-godisable-jacob-1191536@2x.png";
import lookBook3 from "../../../public/pexels-cottonbro-studio-10037708@2x.png";
import lookBook4 from "../../../public/pexels-cottonbro-studio-9154696@2x.png";
import lookBook5 from "../../../public/pexels-godisable-jacob-914662@2x.png";
import lookBook6 from "../../../public/pexels-cottonbro-studio-10679171@2x.png";
import lookBook7 from "../../../public/pexels-jude-stevens-984619@2x.png";
import lookBook8 from "../../../public/pexels-dom-j-45057@2x.png";

export default function LookBook() {
  return (
    <div className="lookBook">
      <div className="img-look">
        <Image
          src={lookBook1}
          alt="Groupe de masques"
          // style={{ objectFit: "contain", width: "37vw", height: "50vh" }}
        />
        <div className="detail-look row justify-content-center">
          <Image
            src={lookBook2}
            alt="Groupe de masques"
            // style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
          <Image
            src={lookBook3}
            alt="Groupe de masques"
            // style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
          <Image
            src={lookBook4}
            alt="Groupe de masques"
            // style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
          <Image
            src={lookBook5}
            alt="Groupe de masques"
            // style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
        </div>

        {/* <Image
          src={lookBook6}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        /> */}
      </div>
      <div className="detail-img row justify-content-center my-3">
        <Image
          src={lookBook6}
          alt="Groupe de masques"
          className=""
          // style={{ objectFit: "contain", width: "25%", height: "100%" }}
        />
        <Image
          src={lookBook7}
          alt="Groupe de masques"
          className=""
          // style={{
          //   objectFit: "contain",
          //   width: "25%",
          //   height: "100%",
            
          // }}
        />
        <Image
          src={lookBook8}
          alt="Groupe de masques"
          // style={{ objectFit: "contain", width: "25%", height: "100%" }}
        />
      </div>

      <div className="img-look">
        <div className="detail-look row justify-content-center">
          <Image
            src={lookBook2}
            alt="Groupe de masques"
          //  style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
          <Image
            src={lookBook3}
            alt="Groupe de masques"
          //  style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
          <Image
            src={lookBook4}
            alt="Groupe de masques"
          //  style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
          <Image
            src={lookBook5}
            alt="Groupe de masques"
          //  style={{ objectFit: "contain", width: "19vw", height: "100%" }}
          />
        </div>

        <Image
          src={lookBook1}
          alt="Groupe de masques"
          // style={{ objectFit: "contain", width: "37vw", height: "55vh" }}
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Lottie from "lottie-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import shopping from "../../../public/shopping-cart.svg";
import NexImg from "../../../public/next1.svg";
import Clothing1 from "../../../public/pexels-godisable-jacob-914664-removebg-preview@2x.png";
import Clothing6 from "../../../public/pexels-timothy-paule-ii-2002717-removebg-preview@2x.png";
import validation from "../../../public/validation.json";

function Card() {
  const [valide, setValidate] =useState(true);
  const handleSubmit = () => {
    setValidate(!valide);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <Image
          src={shopping}
          alt="Groupe de masques"
          width={40}
          // style={{ objectFit: "contain" }}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          width: "25rem",
        }}
        className="p-4"
      >
        {valide ? (
          <>
            <div className="row">
              <Image
                src={Clothing1}
                alt="Groupe de masques"
                height={80}
                style={{ objectFit: "contain" }}
                className="col-3"
                // style={{ objectFit: "contain" }}
              />
              <div className="col-7">
                <div className="">
                  Ensemble chemise et pantalon à ourlet en jeans
                </div>
                <div className="text-md">
                  <strong> 145€</strong>
                </div>
                <div className="text-md">Couleur : Bleu</div>
                <div className="text-md">Taille : L</div>
                <div className="text-md">Quantité : 1</div>
              </div>
              <FaTimes className="col-2" />
            </div>
            <Dropdown.Divider />
            <div className="row">
              <Image
                src={Clothing6}
                alt="Groupe de masques"
                height={80}
                style={{ objectFit: "contain" }}
                className="col-3"
              />
              <div className="col-7">
                <div className="">Blouse kaki avec sac de voyage jaune</div>
                <div className="text-md">
                  {" "}
                  <strong> 345€</strong>{" "}
                </div>
                <div className="text-md">Couleur : kaki (unique)</div>
                <div className="text-md">Taille : L</div>
                <div className="text-md">Quantité : 1</div>
              </div>
              <FaTimes className="col-2" />
            </div>
            <Dropdown.Divider />
            <div className="row justify-content-between ">
              <div className="col-3">
                <div className="text-md">Livraison</div>
                <div className="text-md">Total</div>
              </div>
              <div className="col-3">
                <div className="text-md">5,99€</div>
                <div className="">
                  <strong> 495,99€</strong>
                </div>
              </div>
            </div>
            <div className="detail-info-command my-3">
              <button type="submit" className=" panier" onClick={handleSubmit}>
                <p>Commander</p>
                <Image
                  src={NexImg}
                  alt="Groupe de masques"
                  width={400}
                  // style={{ objectFit: "contain" }}
                />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="p-4" style={{textAlign:'center'}}>
              <h4>
                <strong className="text-xl">Commande validée</strong>
              </h4>
              <div style={{ width: "12rem", margin: "0 3rem" }}>
                <Lottie animationData={validation} loop={true} />
              </div>

              <div className="">
                Vous serez contacté bientôt pour la livraison de votre article.
              </div>
            </div>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Card;

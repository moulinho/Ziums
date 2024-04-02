import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.scss";
import Logo from "../../../public/Logo-Zium.svg";
import NexImg from "../../../public/next.svg";

function Contact() {
  return (
    <div className="row  contact ">
      <div className="col-md-6  col-sm-12 col-xs-12 logo-info " style={{ color: "#fff" }}>
        <Image
          src={Logo}
          alt="Groupe de masques"
          className="mb-4"
    
        />
        <div className="address">
          <strong>Nos contacts</strong>
          <div className="">
            <strong>infos@zium.com</strong>{" "}
          </div>
          <div className="">+33 1 06 01 234 568</div>
          <div className="">75000 Île-de-France, Paris, FRANCE</div>
        </div>
      </div>
      <div className="col-md-5 col-sm-12 col-xs-12 p-4">
        <h1 className="mb-3" style={{ color: "#fff" }}>
          Écrivez-nous
        </h1>
        <div className="row">
          <div className="col-md-6  col-sm-12 col-xs-12 ">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                <strong> Votre nom</strong>
              </label>
              <input
                className="form-control"
                placeholder="Votre nom"
                type="text"
                id="name"
                required
              />
            </div>
          </div>

          <div className="col-md-6  col-sm-12 col-xs-12">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                <strong> Votre adresse email </strong>
              </label>
              <input
                className="form-control"
                placeholder="Votre adresse email"
                type="text"
                id="tel"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                <strong>Votre message </strong>
              </label>
              <textarea
                className="form-control"
                rows={8}
                id="message"
                placeholder="Votre message …"
                required
              />
            </div>
          </div>
          <div className="detail-info " >
          <div className="detail-info-command">
            <button type="submit" className="button-d">
              <p style={{ fontSize: "0.7rem" }}>Envoyer le message</p>
              <Image
                src={NexImg}
                alt="Groupe de masques"
                width={400}
                // style={{ objectFit: "contain" }}
              />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

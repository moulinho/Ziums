"use client";
import React from "react";
import Clothing2 from "../../../public/pexels-engin-akyurt-3687550-removebg-preview@2x.png";
import Clothing3 from "../../../public/pexels-godisable-jacob-914668-removebg-preview@2x.png";
import Clothing4 from "../../../public/pexels-cottonbro-studio-9154696-removebg-preview@2x.png";
import Clothing5 from "../../../public/pexels-cottonbro-studio-10679171-removebg-preview@2x.png";
import Clothing6 from "../../../public/pexels-timothy-paule-ii-2002717-removebg-preview@2x.png";
import NexImg from "../../../public/next.svg";
import "../css/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";

export default function page() {
  const onSubmit = (e) => {
    e.preventDefault();
    // const { name, email, message } = e.target.elements;
  };
  return (
    <div className="livraison">
    <div className="row">
      <div className="col-sm-6 col-xs-12">
        <h2>
          <strong>Delivery</strong>
        </h2>

        <p>Items in caddy *5</p>

        <div className="row justify-content-around">
          <Image
            src={Clothing2}
            alt="Groupe de masques"
            width={100}
            height={150}
            className="col-2"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={Clothing3}
            alt="Groupe de masques"
            width={100}
            height={150}
            className="col-2"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={Clothing4}
            alt="Groupe de masques"
            width={100}
            height={150}
            className="col-2"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={Clothing5}
            alt="Groupe de masques"
            width={100}
            height={150}
            className="col-2"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={Clothing6}
            alt="Groupe de masques"
            width={100}
            height={150}
            className="col-2"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="row justify-content-between">
          <div className="col">Total :</div>
          <div className="col">
            1820 €{" "}
            <div>
              <small class="text-muted">TVA include</small>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6  col-xs-12">
        <p>Means of payment</p>
          <ul class="nav nav-pills gap-4 ">
            <li class="nav-item ">
              <a class="nav-link fs-6  active" aria-current="page" href="#">
                Pay by card
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link fs-6  " href="#">
                Pay via PayPal
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-6 " href="#">
                Pay on delivery
              </a>
            </li>
          </ul>

          <form onSubmit={onSubmit} className="row pt-4">
            <div className="col-6 col-sm-6 col-xs-12">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Your name
                </label>
                <input
                  className="form-control"
                  placeholder="Your name"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="tel">
                  CVV code
                </label>
                <input
                  className="form-control"
                  placeholder="CVV code"
                  type="tel"
                  id="tel"
                  required
                />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-xs-12">
              <div className="mb-3">
                <label className="form-label" htmlFor="card">
                  Card number
                </label>
                <input
                  className="form-control"
                  placeholder="Card number"
                  type="number"
                  id="card"
                  min={0}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="date">
                  Expiration date
                </label>
                <input
                  className="form-control"
                  placeholder="Expiration date"
                  type="date"
                  id="date"
                  required
                />
              </div>
              <div className="detail-info-command">
                <button type="submit" className="panier">
                  <p>Delivery</p>
                  <Image
                    src={NexImg}
                    alt="Groupe de masques"
                    width={400}
                    // style={{ objectFit: "contain" }}
                  />
                </button>
              </div>
            </div>

            {/* <button className="btn btn-danger" type="submit">
          
          </button> */}
          </form>
      </div>
    </div>
    </div>
  );
}

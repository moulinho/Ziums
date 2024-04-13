"use client";
import React, { useState } from "react";
import Clothing2 from "../../../public/pexels-engin-akyurt-3687550-removebg-preview@2x.png";
import Clothing3 from "../../../public/pexels-godisable-jacob-914668-removebg-preview@2x.png";
import Clothing4 from "../../../public/pexels-cottonbro-studio-9154696-removebg-preview@2x.png";
import Clothing5 from "../../../public/pexels-cottonbro-studio-10679171-removebg-preview@2x.png";
import Clothing6 from "../../../public/pexels-timothy-paule-ii-2002717-removebg-preview@2x.png";
import NexImg from "../../../public/next.svg";
import validation from "../../../public/validation.json"
import "../css/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Lottie from "lottie-react";

export default function Page() {
  const [stateCommand, setStateCommand] = useState(false);
  const [open, setOpen] = useState(false);
  const [valide, setValidate] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
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
                <small className="text-muted">TVA include</small>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6  col-xs-12">
          <p>Means of payment</p>
          <ul className="nav nav-pills gap-4 ">
            <li className="nav-item " onClick={() => setStateCommand(false)}>
              <a
                className={
                  !stateCommand ? "nav-link fs-6 active" : "nav-link fs-6 "
                }
                aria-current="page"
                href="#"
              >
                Pay by card
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link fs-6 " href="#">
                Pay via PayPal
              </a>
            </li>
            <li className="nav-item" onClick={() => setStateCommand(true)}>
              <a
                className={
                  stateCommand ? "nav-link fs-6 active" : "nav-link fs-6 "
                }
                href="#"
              >
                Pay on delivery
              </a>
            </li>
          </ul>
          {!stateCommand ? (
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
          ) : (
            <>
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
                      Your email
                    </label>
                    <input
                      className="form-control"
                      placeholder="Your email"
                      type="email"
                      id="tel"
                      required
                    />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-xs-12">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="card">
                      Your phone
                    </label>
                    <input
                      className="form-control"
                      placeholder="Your phone"
                      type="tel"
                      id="card"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="date">
                      Delivery address
                    </label>
                    <input
                      className="form-control"
                      placeholder="Delivery address"
                      type="text"
                      id="date"
                      required
                    />
                  </div>
                  <div className="detail-info-command">
                    <button
                      type="submit"
                      className="panier"
                      onClick={onOpenModal}
                    >
                      <p>Valider order</p>
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
            </>
          )}
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
       
          <div className="container mt-5">
            <h2>Order validated</h2>
            <p> You will be contacted soon for delivery of your item</p>
            <div style={{ width: "12rem", margin: "0 3rem" }}>
                <Lottie animationData={validation} loop={false} />
              </div>
            <div className="detail-info-command text-center">
              <button type="submit" className=" panier" onClick={()=>setOpen(false)}>
                <p className="">
                  <strong>OK</strong>
                </p>
                <Image
                  src={NexImg}
                  alt="Groupe de masques"
                  width={400}
                  // style={{ objectFit: "contain" }}
                />
              </button>
            </div>
          </div>
      
      </Modal>
    </div>
  );
}

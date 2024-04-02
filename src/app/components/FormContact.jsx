import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.scss";
import Image from "next/image";
import NexImg from "../../../public/next1.svg";

function FormContact() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          <div className="row">
            <h2>Commande d'article</h2>
            <div className="col-6">
            <div className="mb-3">
                <label className="form-label" htmlFor="name">
                Votre nom
                </label>
                <input
                  className="form-control"
                  placeholder="Votre nom"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                Votre adresse email
                </label>
                <input
                  className="form-control"
                  placeholder="Votre adresse email"
                  type="text"
                  id="tel"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                Votre adresse email
                </label>
                <input
                  className="form-control"
                  placeholder="Votre adresse email"
                  type="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Une précision
                </label>
                <textarea
                  className="form-control"
                  rows={8}
                  id="message"
                  placeholder="Votre précision sur la livraison …"
                  required
                />
              </div>
            <div className="detail-info-command">
              <button type="submit" className=" panier">
                <p>Ajouter au panier</p>
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
          
          {/* <button className="btn btn-danger" type="submit">
          
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default FormContact;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.scss";
import Image from "next/image";
import NexImg from "../../../public/next1.svg";
import { useRouter } from "next/navigation";

function FormContact({ id, handleClose }) {
  const [formStatus, setFormStatus] = React.useState("Send");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = [];
    let data = [];

    conFom.push({
      name: name.value,
      email: email.value,
      message: message.value,
    });

    window.localStorage.setItem("UserInfo", JSON.stringify(conFom));

    handleClose(conFom);
    // router.refresh();
    // router.push("/livraison");
    // console.log(conFom);
  };     

  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          <div className="row">
            <h2>Ordering items</h2>
            <div className="col-md-6 col-sm-6">
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
                <label className="form-label" htmlFor="name">
                  Your phone number
                </label>
                <input
                  className="form-control"
                  placeholder="Your phone number"
                  type="tel"
                  id="tel"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Your email
                </label>
                <input
                  className="form-control"
                  placeholder="Your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  A precision
                </label>
                <textarea
                  className="form-control"
                  rows={8}
                  id="message"
                  placeholder=" Your precision on the ordering …"
                  required
                />
              </div>
              <div className="detail-info-command">
                <button type="submit" className=" panier" onClick={() => router.push('/livraison')}>
                  <p>Add to caddy</p>
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

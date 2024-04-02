"use client";
import React, { useState } from "react";
import Image from "next/image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../css/style.scss";
import Clothing1 from "../../../../public/pexels-godisable-jacob-914664-removebg-preview@2x.png";
import NexImg from "../../../../public/next.svg";
import FormContact from "@/app/components/FormContact";

function detailVetement() {
  const product = {
    name: "Example Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L", "XL"], // Example sizes for the product
    colors: ["R", "B", "G"],
  };

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color);
    // Pass the selected color to the parent component
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="detail">
      <div className="detail-img">
        <Image
          src={Clothing1}
          alt="Groupe de masques"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="detail-info">
        <div className="product">
          <h1>Ensemble chemise et pantalon à ourlet en jeans 145€</h1>
          <div className="size-options">
            <div>
              <p>couleur</p>
              <div style={{ display: "flex", textAlign: "center" }}>
                {product.colors.map((color, index) => (
                  <span key={index}>
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => handleColorChange(color)}
                    />
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p>Tailles</p>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  style={{
                    fontWeight: selectedSize === size ? "800" : "transparent",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <div>
              <p>Quantité</p>

              <div style={{ display: "flex", height: "1.8rem" }}>
                <button
                  style={{
                    background: "#E5DBC2",
                    padding: "0 10px",
                    borderRadius: "50%",
                    margin: "0",
                  }}
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  min="1"
                  value={quantity}
                  onChange={handleChange}
                  style={{
                    width: "2rem",
                    textAlign: "center",
                    border: "none",
                    background: "transparent",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                />
                <button
                  style={{
                    background: "#E5DBC2",
                    padding: "0 7px",
                    borderRadius: "50%",
                  }}
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="button-d" onClick={onOpenModal}>
          <p>Commander</p>
          <Image
            src={NexImg}
            alt="Groupe de masques"
            width={400}
            // style={{ objectFit: "contain" }}
          />
        </button>
        <Modal open={open} onClose={onCloseModal} center>
          <FormContact />
        </Modal>
        {/* <p> Size: {selectedSize}</p> */}
      </div>
    </div>
  );
}

export default detailVetement;

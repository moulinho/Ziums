"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../css/style.scss";
import Clothing1 from "../../../../public/pexels-godisable-jacob-914664-removebg-preview@2x.png";
import Clothing2 from "../../../../public/pexels-engin-akyurt-3687550-removebg-preview@2x.png";
import Clothing3 from "../../../../public/pexels-godisable-jacob-914668-removebg-preview@2x.png";
import Clothing4 from "../../../../public/pexels-cottonbro-studio-9154696-removebg-preview@2x.png";
import Clothing5 from "../../../../public/pexels-cottonbro-studio-10679171-removebg-preview@2x.png";
import Clothing6 from "../../../../public/pexels-timothy-paule-ii-2002717-removebg-preview@2x.png";
import NexImg from "../../../../public/next.svg";
import FormContact from "@/app/components/FormContact";
import { useSearchParams } from "next/navigation";

function DetailVetement() {
  const params = useSearchParams();
  const id = params.get("id");
  // console.log("is", id);
  // console.log("DetailVetement", params);
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
  const [selectedColor, setSelectedColor] = useState(null);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("article"));

  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, []);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Function to handle color selection
  const handleColorChange = (color) => {
    // console.log("color: ", color);
    setSelectedColor(color);

    // Pass the selected color to the parent component
  };

  // console.log("listProduct", listProduct);
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

  // console.log("newQuantity", quantity);

  const handleClose = (first) => {
    let storedCart = JSON.parse(localStorage.getItem("article"));
    let listeItem = [];

    listeItem.push({
      id: id,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize,
    });

    console.log("listeItem", listeItem);

    const existe = storedCart.find((item, index) => {
      console.log("existe", item);
      // item.id === listeItem[0].id;
    });

    if (existe) {
      console.log("exist", existe);

      // window.localStorage.setItem("article", JSON.stringify(listeItem));
    } else {
      listeItem = [...storedCart, ...listeItem];
      window.localStorage.setItem("article", JSON.stringify(listeItem));
    }
    // console.log("data", data);

    if (first) setOpen(false);
  };

  return (
    <div className="detail">
      {(() => {
        switch (id) {
          case "1":
            return (
              <>
                <div className="detail-img">
                  <Image
                    src={Clothing1}
                    alt="Groupe de masques"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="detail-info">
                  <div className="product">
                    <h1 className="">
                      Denim Hem Shirt and Pants Set <br /> 145€
                    </h1>
                    <div className="size-options">
                      <div>
                        <p>Colors</p>
                        <div style={{ display: "flex", textAlign: "center" }}>
                          {/* {product.colors.map((color, index) => ( */}

                          <input
                            type="radio"
                            name="color"
                            value="red"
                            className="inputRed"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="blue"
                            className="inputBlue"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="green"
                            className="inputGreen"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          {/* ))} */}
                        </div>
                      </div>
                      <div>
                        <p>Sizes</p>
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            style={{
                              fontWeight:
                                selectedSize === size ? "800" : "transparent",
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <div>
                        <p>Quantity</p>

                        <div style={{ display: "flex", height: "1.8rem" }}>
                          <button
                            style={{
                              background: "#E5DBC2",
                              padding: "0 12px",
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
                              padding: "0 10px",
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
                    <p>Order</p>
                    <Image
                      src={NexImg}
                      alt="Groupe de masques"
                      width={400}
                      // style={{ objectFit: "contain" }}
                    />
                  </button>

                  {/* <p> Size: {selectedSize}</p> */}
                </div>
              </>
            );
          case "2":
            return (
              <>
                <div className="detail-img">
                  <Image
                    src={Clothing2}
                    alt="Groupe de masques"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="detail-info">
                  <div className="product">
                    <h1 className="">
                      Long dress <br /> 345€
                    </h1>
                    <div className="size-options">
                      <div>
                        <p>Colors</p>
                        <div style={{ display: "flex", textAlign: "center" }}>
                          {/* {product.colors.map((color, index) => ( */}

                          <input
                            type="radio"
                            name="color"
                            value="red"
                            className="inputYellow"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="blue"
                            className="inputBlue"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="green"
                            className="inputGreen"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          {/* ))} */}
                        </div>
                      </div>
                      <div>
                        <p>Sizes</p>
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            style={{
                              fontWeight:
                                selectedSize === size ? "800" : "transparent",
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <div>
                        <p>Quantity</p>

                        <div style={{ display: "flex", height: "1.8rem" }}>
                          <button
                            style={{
                              background: "#E5DBC2",
                              padding: "0 12px",
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
                              padding: "0 10px",
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
                    <p>Order</p>
                    <Image
                      src={NexImg}
                      alt="Groupe de masques"
                      width={400}
                      // style={{ objectFit: "contain" }}
                    />
                  </button>

                  {/* <p> Size: {selectedSize}</p> */}
                </div>
              </>
            );
          case "3":
            return (
              <>
                <div className="detail-img">
                  <Image
                    src={Clothing3}
                    alt="Groupe de masques"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="detail-info">
                  <div className="product">
                    <h1 className="">
                      Denim Hem Shirt and Pants Set <br /> 345€
                    </h1>
                    <div className="size-options">
                      <div>
                        <p>Colors</p>
                        <div style={{ display: "flex", textAlign: "center" }}>
                          {/* {product.colors.map((color, index) => ( */}

                          <input
                            type="radio"
                            name="color"
                            value="red"
                            className="inputRed"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="blue"
                            className="inputBlue"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="green"
                            className="inputGreen"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          {/* ))} */}
                        </div>
                      </div>
                      <div>
                        <p>Sizes</p>
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            style={{
                              fontWeight:
                                selectedSize === size ? "800" : "transparent",
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <div>
                        <p>Quantity</p>

                        <div style={{ display: "flex", height: "1.8rem" }}>
                          <button
                            style={{
                              background: "#E5DBC2",
                              padding: "0 12px",
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
                              padding: "0 10px",
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
                    <p>Order</p>
                    <Image
                      src={NexImg}
                      alt="Groupe de masques"
                      width={400}
                      // style={{ objectFit: "contain" }}
                    />
                  </button>

                  {/* <p> Size: {selectedSize}</p> */}
                </div>
              </>
            );
          case "4":
            return (
              <>
                <div className="detail-img">
                  <Image
                    src={Clothing4}
                    alt="Groupe de masques"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="detail-info">
                  <div className="product">
                    <h1 className="">
                      Men’s shirt and pants set with blue t-shirt <br /> 295€
                    </h1>
                    <div className="size-options">
                      <div>
                        <p>Colors</p>
                        <div style={{ display: "flex", textAlign: "center" }}>
                          {/* {product.colors.map((color, index) => ( */}

                          <input
                            type="radio"
                            name="color"
                            value="red"
                            className="inputGrayLight"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="blue"
                            className="inputBlue"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="green"
                            className="inputGreen"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          {/* ))} */}
                        </div>
                      </div>
                      <div>
                        <p>Sizes</p>
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            style={{
                              fontWeight:
                                selectedSize === size ? "800" : "transparent",
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <div>
                        <p>Quantity</p>

                        <div style={{ display: "flex", height: "1.8rem" }}>
                          <button
                            style={{
                              background: "#E5DBC2",
                              padding: "0 12px",
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
                              padding: "0 10px",
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
                    <p>Order</p>
                    <Image
                      src={NexImg}
                      alt="Groupe de masques"
                      width={400}
                      // style={{ objectFit: "contain" }}
                    />
                  </button>

                  {/* <p> Size: {selectedSize}</p> */}
                </div>
              </>
            );
          case "5":
            return (
              <>
                <div className="detail-img">
                  <Image
                    src={Clothing5}
                    alt="Groupe de masques"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="detail-info">
                  <div className="product">
                    <h1 className="">
                      Men’s shirt and pants set <br /> 345€
                    </h1>
                    <div className="size-options">
                      <div>
                        <p>Colors</p>
                        <div style={{ display: "flex", textAlign: "center" }}>
                          {/* {product.colors.map((color, index) => ( */}

                          <input
                            type="radio"
                            name="color"
                            value="red"
                            className="inputKaki"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="blue"
                            className="inputBlue"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="green"
                            className="inputGreen"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          {/* ))} */}
                        </div>
                      </div>
                      <div>
                        <p>Sizes</p>
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            style={{
                              fontWeight:
                                selectedSize === size ? "800" : "transparent",
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <div>
                        <p>Quantity</p>

                        <div style={{ display: "flex", height: "1.8rem" }}>
                          <button
                            style={{
                              background: "#E5DBC2",
                              padding: "0 12px",
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
                              padding: "0 10px",
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
                    <p>Order</p>
                    <Image
                      src={NexImg}
                      alt="Groupe de masques"
                      width={400}
                      // style={{ objectFit: "contain" }}
                    />
                  </button>

                  {/* <p> Size: {selectedSize}</p> */}
                </div>
              </>
            );
          case "6":
            return (
              <>
                <div className="detail-img">
                  <Image
                    src={Clothing6}
                    alt="Groupe de masques"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="detail-info">
                  <div className="product">
                    <h1 className="">
                      Long jacket and shopping bag <br />
                      345€
                    </h1>
                    <div className="size-options">
                      <div>
                        <p>Colors</p>
                        <div style={{ display: "flex", textAlign: "center" }}>
                          {/* {product.colors.map((color, index) => ( */}

                          <input
                            type="radio"
                            name="color"
                            value="red"
                            className="inputYellow"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="blue"
                            className="inputBlue"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          <input
                            type="radio"
                            name="color"
                            value="green"
                            className="inputGreen"
                            onClick={(e) => handleColorChange(e.target.value)}
                          />
                          {/* ))} */}
                        </div>
                      </div>
                      <div>
                        <p>Sizes</p>
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            style={{
                              fontWeight:
                                selectedSize === size ? "800" : "transparent",
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <div>
                        <p>Quantity</p>

                        <div style={{ display: "flex", height: "1.8rem" }}>
                          <button
                            style={{
                              background: "#E5DBC2",
                              padding: "0 12px",
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
                              padding: "0 10px",
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
                    <p>Order</p>
                    <Image
                      src={NexImg}
                      alt="Groupe de masques"
                      width={400}
                      // style={{ objectFit: "contain" }}
                    />
                  </button>

                  {/* <p> Size: {selectedSize}</p> */}
                </div>
              </>
            );
          default:
            return (
              <div className="text-theme-11 text-3xl">
                Indisponible pour le moment
              </div>
            );
        }
      })()}
      <Modal open={open} onClose={onCloseModal} center>
        <FormContact id={id} handleClose={handleClose} />
      </Modal>
    </div>
  );
}

export default DetailVetement;

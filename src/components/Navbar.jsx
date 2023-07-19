import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
const NavbarComponent = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div>
      <Navbar>
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {productsCount>0 ? productsCount:''}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount>0
          ?
            <>
          <p>Items in the cart</p>

          {cart.items.map((currentProduct,idx) => (
            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}/>
          ))}
          <h1> Total:{cart.getTotalCost().toFixed(2)}</h1>
          </>
          :
          <h1>The cart is empty!</h1>
      
        }
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComponent;

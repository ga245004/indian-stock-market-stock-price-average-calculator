import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

import "./AddEntry.css";
const AddEntry = ({ setEntry }) => {
  const [newQuantity, setNewQuantity] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const onChangeQuantity = ({ target }) => {
    let { value } = target;
    value = parseInt(value, 10);
    if (!isNaN(value)) {
      setNewQuantity(value);
    }
  };

  const onChangePrice = ({ target }) => {
    let { value } = target;
    let isDecimal = value.endsWith(".");
    value = parseFloat(value);
    if (!isNaN(value)) {
      if (isDecimal) {
        value = value + ".";
      }
      setNewPrice(value);
    }
  };

  const AddEntry = () => {
    if (newQuantity && newPrice) {
      const newEntry = {
        quantity: newQuantity,
        price: newPrice
      };
      setEntry && setEntry(newEntry);
    }
  };

  return (
    <>
      <div className="add-entry-form">
        <InputGroup className="mb-3">
          <InputGroup.Text id="new-quantity">Quantity</InputGroup.Text>
          <Form.Control
            size="lg"
            type="text"
            aria-label="new quantity"
            aria-describedby="new-quantity"
            placeholder=""
            value={newQuantity}
            onChange={onChangeQuantity}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="new-quantity">Price</InputGroup.Text>
          <Form.Control
            size="lg"
            type="text"
            aria-label="new price"
            aria-describedby="new-price"
            placeholder=""
            value={newPrice}
            onChange={onChangePrice}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Button variant="primary" type="submit" onClick={AddEntry}>
            Add
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default AddEntry;

import React, { useState, useEffect } from "react";
import { Card, Table, Form, Button } from "react-bootstrap";

import "./StockEntry.css";

const StockEntry = () => {
  const [newQuantity, setNewQuantity] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0.0);

  const [entries, setEntries] = useState([]);

  const getTotal = ({ quantity, price }) => {
    return quantity * price;
  };

  const AddEntry = () => {
    console.log("add", newQuantity, newPrice);
    if (newQuantity && newPrice) {
      const newEntries = [
        {
          quantity: newQuantity,
          price: newPrice
        }
      ];
      setEntries(newEntries.concat(entries));
    }
  };

  useEffect(() => {
    let averagePrice = 0.0,
      totalQuantity = 0;
    entries.forEach(({ quantity, price }) => {
      if (totalQuantity !== 0) {
        const totalPrice = totalQuantity * averagePrice;
        const currentTotalPrice = quantity * 1 * (price * 1);
        const totalAveragePrice = totalPrice + currentTotalPrice;

        totalQuantity = totalQuantity + quantity * 1;
        averagePrice = totalAveragePrice / totalQuantity;
      } else {
        totalQuantity = quantity * 1;
        averagePrice = price * 1;
      }
    });
    console.log("average", averagePrice, totalQuantity);
    setTotalQuantity(totalQuantity);
    setAveragePrice(averagePrice);
  }, [entries]);

  return (
    <>
      <Card>
        <Card.Header>
          <h3>Average Price = {averagePrice}</h3>
          <h6>Total Quantity = {totalQuantity}</h6>
          <h6>
            Total Investment ={" "}
            {getTotal({ quantity: totalQuantity, price: averagePrice })}
          </h6>
        </Card.Header>
        <Card.Body>
          <div className="entry-form">
            <Form.Control
              size="lg"
              type="text"
              placeholder="new quantity"
              value={newQuantity}
              onChange={({ target }) => {
                console.log(target, target.value);
                const { value } = target;
                setNewQuantity(value);
              }}
            />
            <Form.Control
              size="lg"
              type="text"
              placeholder="new price"
              value={newPrice}
              onChange={({ target }) => {
                console.log(target, target.value);
                const { value } = target;
                setNewPrice(value);
              }}
            />
            <Button variant="primary" type="submit" onClick={AddEntry}>
              Add
            </Button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(({ quantity, price }, index) => (
                <tr key={(quantity = "_" + index)}>
                  <td>{index + 1}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{getTotal({ quantity, price })}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default StockEntry;

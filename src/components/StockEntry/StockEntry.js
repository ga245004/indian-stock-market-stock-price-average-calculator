import React, { useState, useEffect } from "react";
import { Card, Table, Form, Button, InputGroup } from "react-bootstrap";

import AddEntry from "../AddEntry/AddEntry";
import "./StockEntry.css";

const StockEntry = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0.0);

  const [entries, setEntries] = useState([]);

  const getTotal = ({ quantity, price }) => {
    return quantity * price;
  };

  const SetEntry = (entry) => {
    const newEntries = [entry];
    setEntries(newEntries.concat(entries));
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
          <div className="header">
            <div className="header-labels">
              <h3>Average Price = {averagePrice}</h3>
              <h6>Total Quantity = {totalQuantity}</h6>
              <h6>
                Total Investment ={" "}
                {getTotal({ quantity: totalQuantity, price: averagePrice })}
              </h6>
            </div>
            <div className="header-actions">
              {entries.length > 0 && (
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    setEntries([]);
                  }}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <AddEntry setEntry={SetEntry} />
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

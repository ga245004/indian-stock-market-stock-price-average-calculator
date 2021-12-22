import React from "react";
import { Card, Table } from "react-bootstrap";

const StockEntry = () => {
  const entries = [
    {
      quantity: 10,
      price: 13.3
    }
  ];

  const getTotal = ({ quantity, price }) => {
    return quantity * price;
  };

  return (
    <>
      <Card>
        <Card.Header>
          <h3>Holdings</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(({ quantity, price }) => (
                <tr>
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

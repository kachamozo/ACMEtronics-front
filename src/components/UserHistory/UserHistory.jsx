import React, { useEffect } from "react";
import "./UserHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@mui/material";

export default function UserHistory() {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.allOrders.data);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(orders);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Order History</h1>

          <div className="back">
            <Button>
              {" "}
              <Link to="/dashboard">
                <p>Back to Dashboard</p>
              </Link>
            </Button>
          </div>
        </div>

        <TableContainer>
          <Table classname="table">
            <TableHead className="th">
              <TableRow>
                <TableCell className="cell">ID</TableCell>
                <TableCell className="cell">Status</TableCell>
                <TableCell className="cell">Items</TableCell>
                <TableCell className="cell">Quantity</TableCell>
                <TableCell className="cell">Total</TableCell>
              </TableRow>
            </TableHead>

            <TableBody className="tb">
              {orders?.map((order) => {
                const names = order.items
                  .flat()
                  .filter((item) => item[0] === "name")
                  .map((item) => item[1])
                  .join(", ");

                const quantities = order.items
                  .flat()
                  .filter((item) => item[0] === "quantity")
                  .map((item) => item[1])
                  .join(", ");
                return (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>{names}</TableCell>
                    <TableCell>{quantities}</TableCell>
                    <TableCell>{order.total}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

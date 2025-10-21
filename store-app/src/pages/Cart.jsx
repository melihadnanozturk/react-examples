import { useEffect, useState } from "react";
import request from "../api/apiClient";
import { currencyTRY } from "../utils/price_format";
import { Delete } from "@mui/icons-material";
import Loading from "../components/Loading";

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    request.cart.get().then((data) => {
      setCart(data);
      setLoading(false);
    });
  }, []);

  console.log("datas", cart);

  if (loading) return <Loading />;
  if (!cart.cartItems || cart.cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Sepetinizde herhangi bir urun bulunmamaktadır</h1>
      </div>
    );
  }
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 100 }}></TableCell>
            <TableCell sx={{ width: 300 }}>Product</TableCell>
            <TableCell sx={{ width: 100 }}>Price</TableCell>
            <TableCell sx={{ width: 50 }}>Quantity</TableCell>
            <TableCell sx={{ width: 100 }}>Total</TableCell>
            <TableCell sx={{ width: 50 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems &&
            cart.cartItems.map(
              (item) => (
                console.log("cartIcindeki Item", item),
                (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={`http://localhost:5000/images/${item.product.image}`}
                        style={{ width: "100%" }}
                      />
                    </TableCell>
                    <TableCell>{item.product.title}</TableCell>
                    <TableCell>
                      {currencyTRY.format(item.product.price)}
                    </TableCell>
                    <TableCell>{item.product.quantity}</TableCell>
                    <TableCell>
                      {currencyTRY.format(
                        item.product.price * item.product.quantity
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Delete color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

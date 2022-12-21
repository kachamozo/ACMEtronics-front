import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, removeCart,decreaseQuantity } from "../../redux/actions";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  let ListCart = [];
  console.log(ListCart);
  let TotalCart = 0;
  Object.keys(cart).forEach(function (item) {
    TotalCart += cart[item].quantity * cart[item].price;
    ListCart.push(cart[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }
  const dispatch = useDispatch();
  // -- el item se guarda en el carrito ---
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(ListCart));
  }, [ListCart ]);
  const handleDelete = () => {
    dispatch(removeCart());
  };
  const handleIncrease = () => {
    dispatch(increaseQuantity())
  }
  const handleDescrease = () => {
    dispatch(decreaseQuantity())
  }

  return (
    <div>
      <h1> Cart </h1>
      <table className="table mx-auto" style={{ maxWidth: "1200px" }}>
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">image</th>
            <th scope="col">quantity</th>
            <th scope="col">Final price</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {ListCart?.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
              <img src={item.image} width="100px" />
              <td>
                <button
                  className="btn btn-primary"
                  style={{ margin: "2px" }}
                  onClick={()  => handleDescrease(item.id)}
                >
                  -
                  </button>
                <span className="btn btn-info">{item.quantity}</span>
                <button
                  className="btn btn-primary"
                  style={{ margin: "2px" }}
                  onClick={handleIncrease }
                >
                  +
                  </button>
              </td>
              <button onClick={handleDelete}> Eliminar </button>
              <p>{TotalPrice(item.price, item.quantity)} $</p>
            </div>
          ))}
        </tbody>
        <p>{Number(TotalCart).toLocaleString("en-US")} $</p>
      </table>
    </div>
  );
}
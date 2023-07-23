"use client";

//assets
import { OrdersContainer } from "@/assets/css/orders";

//components
import Dashboard from "../dashboard";
import Header from "../header/header";

const Orders = () => {
  return (
    <Dashboard>
      <Header />
      <OrdersContainer>
        <div className="">salam</div>
      </OrdersContainer>
    </Dashboard>
  );
};
export default Orders;

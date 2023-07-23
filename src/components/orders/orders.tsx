//assets
import { OrdersContainer } from "@/assets/css/orders";

//components
import Dashboard from "../dashboard";
import Header from "../header/header";
import Table from "./table";

const Orders = () => {
  return (
    <Dashboard>
      <Header />
      <OrdersContainer>
       <Table/>
      </OrdersContainer>
    </Dashboard>
  );
};
export default Orders;

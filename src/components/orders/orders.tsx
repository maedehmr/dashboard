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
        <div className="">orders</div>
      </OrdersContainer>
    </Dashboard>
  );
};
export default Orders;

//components
import Orders from "@/components/orders/orders";
import Head from "next/head";

export default function OrderPage() {
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <Orders />
    </>
  );
}
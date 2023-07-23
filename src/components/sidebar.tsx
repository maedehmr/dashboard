"use client";
import Image from "next/image";

//assets
import {
  SidebarRightContainer,
  SidebarBottomContainer,
} from "@/assets/css/sidebar";

//images
import logo from "@/assets/img/logo.png";
import bottomArrow from "@/assets/img/bottom-arrow.svg";
import rightArrow from "@/assets/img/right-arrow.svg";
import dashboard from "@/assets/img/dashboard.svg";
import orders from "@/assets/img/orders.svg";
import activeDashboard from "@/assets/img/active-dashboard.svg";
import activeOrders from "@/assets/img/active-orders.svg";

export const SidebarRight = () => {
  return (
    <SidebarRightContainer>
      <div className="head">
        <Image width={56} src={logo} alt="logo" />
        <div className="titr">
          <h1>گنجور</h1>
          <div className="desc">
            <h2>در باب شعر فارسی</h2>
            <Image src={bottomArrow} alt="bottom-arrow" />
          </div>
        </div>
      </div>
      <div className="items">
        <strong>مدیریت پنل</strong>
        <ul>
          <li>
            <div className="item">
              <Image src={dashboard} alt="dashboard" />
              <small>میز کار</small>
            </div>
            <Image src={rightArrow} alt="right-arrow" />
          </li>
          <li>
            <div className="item">
              <Image src={orders} alt="orders" />
              <small>سفارشات</small>
            </div>
            <Image src={rightArrow} alt="right-arrow" />
          </li>
        </ul>
      </div>
    </SidebarRightContainer>
  );
};
export const SidebarBottom = () => {
  return (
    <SidebarBottomContainer>
      <div className=""></div>
    </SidebarBottomContainer>
  );
};

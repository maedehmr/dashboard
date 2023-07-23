"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
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
            <Link href="/">
              <div className="item">
                <Image
                  src={router.pathname === "/" ? activeDashboard : dashboard}
                  alt="dashboard"
                />
                <small>میز کار</small>
              </div>
              <Image src={rightArrow} alt="right-arrow" />
            </Link>
          </li>
          <li>
            <Link href="/orders">
              <div className="item">
                <Image
                  src={router.pathname === "/orders" ? activeOrders : orders}
                  alt="orders"
                />
                <small>سفارشات</small>
              </div>
              <Image src={rightArrow} alt="right-arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </SidebarRightContainer>
  );
};
export const SidebarBottom = () => {
  const router = useRouter();
  return (
    <SidebarBottomContainer>
      <ul>
        <li>
          <Link href="/">
            <Image
              src={router.pathname === "/" ? activeDashboard : dashboard}
              alt="dashboard"
            />
            <small>میز کار</small>
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <Image
              src={router.pathname === "/orders" ? activeOrders : orders}
              alt="orders"
            />
            <small>سفارشات</small>
          </Link>
        </li>
      </ul>
    </SidebarBottomContainer>
  );
};

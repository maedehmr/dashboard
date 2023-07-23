import { useRouter } from "next/router";
//assets
import { HeaderContainer } from "@/assets/css/header";

const Header = () => {
  const router = useRouter();
  const handleExit = () => {};
  return (
    <HeaderContainer>
      <div className="breadcrumb">{`مدیریت پنل > ${
        router.pathname === "/"
          ? "میز کار"
          : router.pathname === "/orders"
          ? "سفارشات"
          : null
      }`}</div>
      <div onClick={handleExit} className="exit-btn">
        خروج از حساب
      </div>
    </HeaderContainer>
  );
};
export default Header;

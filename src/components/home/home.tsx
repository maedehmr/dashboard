//assets
import { HomeContainer } from "@/assets/css/home";

//components
import Dashboard from "../dashboard";
import Header from "../header/header";

const Home = () => {
  return (
    <Dashboard>
      <Header />
      <HomeContainer>
        <div className="">home</div>
      </HomeContainer>
    </Dashboard>
  );
};
export default Home;

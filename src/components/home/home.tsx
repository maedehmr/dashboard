import Grid from "@mui/material/Grid";

//assets
import { HomeContainer } from "@/assets/css/home";

//components
import Dashboard from "../dashboard";
import Header from "../header/header";
import ChartCard from "./chart-card";
import SaleTab from "./sale-tab";

const Home = () => {
  return (
    <Dashboard>
      <Header />
      <HomeContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ChartCard name="جمع فروش" price="126,000 تومان" type="bar" bottomTitle="فروش روزانه" bottomDesc="12,432 ريال" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ChartCard name="پرداخت ها" price="5,360" type="line" bottomTitle="بازدید روزانه" bottomDesc="2,432 ريال" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ChartCard name="اثر عملیاتی" price="74%" type="pie" bottomTitle="نرخ تبدیل" bottomDesc="60%" />
          </Grid>
        </Grid>
      </HomeContainer>
    </Dashboard>
  );
};
export default Home;

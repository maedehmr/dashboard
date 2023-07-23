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
          <Grid item xs={12} sm={6} md={3}>
            <ChartCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ChartCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ChartCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ChartCard />
          </Grid>
        </Grid>
      </HomeContainer>
    </Dashboard>
  );
};
export default Home;

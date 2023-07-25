//components
import Home from "@/components/home/home";
import Head from "next/head";
import { StyledEngineProvider } from '@mui/material/styles';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <StyledEngineProvider injectFirst>
      <Home />
      </StyledEngineProvider>
    </>
  );
}

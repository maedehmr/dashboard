import styled from "@emotion/styled";

export const DashboardContainer = styled.div((props) => ({
  display: "flex",

  "& .content": {
    width: "100%",
    minHeight:'100vh',
    backgroundColor: "#F0F2F5",
  },
}));

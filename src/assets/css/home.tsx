import styled from "@emotion/styled";

export const HomeContainer = styled.div((props) => ({
  padding: "32px",
}));

export const ChartCardContainer = styled.div((props) => ({
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "18px 24px 12px",

  "& .top": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#697480",
    fontSize: ".875rem",
    fontWeight: "500",
    marginBottom: "8px",
  },

  h4: {
    fontWeight: "700",
    fontSize: "1.75rem",
    color:'#414A53'
  },

  "& .chart": {
    width: "fit-content",
    padding: "10px 0",
  },

  hr: {
    border: "1px solid #C2CEDB",
  },

  "& .bottom": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "500",
    fontSize: ".875",
    strong: {
      color: "#414A53",
    },
    small: {
      color: "#697480",
    },
  },
}));

export const SaleTabContainer = styled.div((props) => ({}));

import styled from "@emotion/styled";

export const OrdersContainer = styled.div((props) => ({
  padding: "32px",

  h3: {
    marginBottom: "24px",
    fontWeight: "700",
    fontSize:'1.5rem',
    color:'#414A53'
  },
}));

export const TableContainer = styled.div((props) => ({
  "& .MuiPagination-ul": {
    direction: "ltr",
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
}));

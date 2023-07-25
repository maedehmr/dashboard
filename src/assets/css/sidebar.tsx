import styled from "@emotion/styled";

export const SidebarRightContainer = styled.div((props) => ({
  backgroundColor: "#35414F",
  width: "260px",
  minHeight: "100%",

  "& .head": {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2A3541",
    padding: "18px 16px",

    "& .titr": {
      width: "100%",
      paddingRight: "13px",
      color: "#fff",
      h1: {
        fontWeight: "500",
        fontSize: ".875rem",
      },

      "& .desc": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        h2: {
          fontWeight: "300",
          fontSize: ".75rem",
          marginTop: "4px",
        },
      },
    },
  },

  "& .items": {
    margin: "16px 24px",
    color: "#F0F2F5",
    fontWeight: "300",
    strong: {
      fontSize: ".75rem",
    },

    a: {
      marginTop: "16px",
      padding: "12px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: ".875rem",
      transition: "ease .3s",
      color: "#F0F2F5",

      "& .item": {
        display: "flex",
        alignItems: "center",

        small: {
          marginRight: "8px",
        },
      },

      "&:hover": {
        background: "linear-gradient(to right, #2A3541, transparent)",
        padding: "12px 0 12px 10px",
        borderRadius: "8px",
        cursor: "pointer",
      },
    },
  },

  "@media (max-width: 768px)": {
    display: "none",
  },
}));

export const SidebarBottomContainer = styled.div((props) => ({
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  backgroundColor: "#35414F",
  padding:'12px 0',

  ul: {
    display:'flex',
    justifyContent:'space-around',

    a: {
      display: "flex",
      flexDirection: "column",
      alignItems:'center',
      color: "#F0F2F5",
      gap:'10px',
      fontSize: ".75rem",
    },
  },

  "@media (min-width: 768px)": {
    display: "none",
  },
}));

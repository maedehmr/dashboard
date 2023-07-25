import styled from "@emotion/styled";

export const OrdersContainer = styled.div((props) => ({
  padding: "32px",

  h3: {
    marginBottom: "24px",
    fontWeight: "700",
    fontSize: "1.5rem",
    color: "#414A53",
  },
}));

export const TableContainer = styled.div((props) => ({
  table: {
    width: "100%",
    th: {
      padding: "20px",
      backgroundColor: "#1890FF",
      fontWeight: "400",
      fontSize: "1rem",
      color: "#fff",

      "&:first-of-type": {
        borderRadius: "0 8px 8px 0",
      },
      "&:last-of-type": {
        borderRadius: "8px 0 0 8px",
      },
    },

    tr: {
      td: {
        fontSize: ".875rem",
        textAlign: "center",
        padding: "20px 35px",
        fontWeight: "400",

        "&:first-of-type": {
          borderRadius: "0 8px 8px 0",
        },
        "&:last-of-type": {
          borderRadius: "8px 0 0 8px",
        },

        "@media (max-width: 992px)": {
          position: "relative",
          padding: "0 0 0 50%",
          textAlign: "left",
          fontWeight: "500",
        },
      },

      "&:nth-of-type(even)": {
        backgroundColor: "#fff",
      },
    },
  },

  "@media only screen and (max-width: 760px),(min-device-width: 768px) and (max-device-width: 992px)":
    {
      "& table,thead,tbody,th,td,tr": {
        display: "block",
      },

      "& thead tr": {
        position: "absolute",
        top: "-9999px",
        left: "-9999px",
      },

      "td:before": {
        position: "absolute",
        left: "6px",
        width: "45%",
        paddingRight: "10px",
        whiteSpace: "nowrap",
      },

      tr: {
        borderRadius: "30px",
        padding: "24px 32px !important",
        border: "2px solid #2A3541",
        marginTop: "15px",
      },

      td: {
        marginTop: "5px",
      },

      "td:nth-of-type(1):before": {
        content: '"شماره"',
        fontWeight: "300",
        textAlign: "left",
      },

      "td:nth-of-type(2):before": {
        content: '"نام"',
        fontWeight: "300",
        textAlign: "left",
      },

      "td:nth-of-type(3):before": {
        content: '"سال تولد"',
        fontWeight: "300",
        textAlign: "left",
      },

      "td:nth-of-type(4):before": {
        content: '"شهر تولد"',
        fontWeight: "300",
        textAlign: "left",
      },
      "td:nth-of-type(5):before": {
        content: '"نسخه شعر"',
        fontWeight: "300",
        textAlign: "left",
      },
      "td:nth-of-type(6):before": {
        content: '"درگذشت"',
        fontWeight: "300",
        textAlign: "left",
      },
    },

  "& .MuiPagination-ul": {
    direction: "ltr",
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
}));

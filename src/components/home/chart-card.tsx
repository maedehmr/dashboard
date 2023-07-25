import Image from "next/image";

// //mui chart
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

//assets
import { ChartCardContainer } from "@/assets/css/home";

//images
import information from "@/assets/img/information.svg";

interface chartProps {
  name: string;
  price: string;
  type: "bar" | "line" | "pie";
  bottomTitle: string;
  bottomDesc: string;
}

const ChartCard = ({
  name,
  price,
  type,
  bottomTitle,
  bottomDesc,
}: chartProps) => {
  // let chart;

  // if (type === "bar") {
  //   chart = (
  //     <BarChart
  //       xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
  //       series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
  //     />
  //   );
  // } else if (type === "line") {
  //   chart = (
  //     <LineChart
  //       xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  //       series={[
  //         {
  //           data: [2, 5.5, 2, 8.5, 1.5, 5],
  //         },
  //       ]}
  //     />
  //   );
  // } else if (type === "pie") {
  //   chart = (
  //     <PieChart
  //       series={[
  //         {
  //           data: [
  //             { id: 0, value: 10, label: "series A" },
  //             { id: 1, value: 15, label: "series B" },
  //             { id: 2, value: 20, label: "series C" },
  //           ],
  //         },
  //       ]}
  //     />
  //   );
  // }
  return (
    <ChartCardContainer>
      <div className="top">
        <h5>{name}</h5>
        <Image src={information} alt="information" />
      </div>
      <h4>{price}</h4>
      {/* <div className="chart">{chart}</div> */}
      <hr />
      <div className="bottom">
        <strong>{bottomTitle}</strong>
        <small>{bottomDesc}</small>
      </div>
    </ChartCardContainer>
  );
};
export default ChartCard;

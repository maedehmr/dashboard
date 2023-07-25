import { useState, useEffect } from "react";

//assets
import { TableContainer } from "@/assets/css/orders";

//mui
import Pagination from "@mui/material/Pagination";

//api
import { getPoets } from "@/api/call/data/orders";
import { IPoets } from "@/api/dto/orders";

const Table = () => {
  const [poets, setPoets] = useState<IPoets[]>([]);
  const [poetsPage, setPoetsPage] = useState(1);
  const poetsPerPage = 10;
  const totalPoetsPages = Math.ceil(poets.length / poetsPerPage);

  useEffect(() => {
    async function fetchData() {
      const poets = await getPoets();
      setPoets(poets);
    }
    fetchData();
  }, []);

  const tableHeader = [
    "شماره",
    "نام",
    "سال تولد",
    "شهر تولد",
    "نسخه شعر",
    "درگذشت",
  ];

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {tableHeader.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {poets
            .slice((poetsPage - 1) * poetsPerPage, poetsPage * poetsPerPage)
            .map((poet) => (
              <tr key={`poet_${poet.id}`}>
                <td>{poet.id}</td>
                <td>{poet.name}</td>
                <td>{poet.birthYearInLHijri}</td>
                <td>{poet.birthPlace}</td>
                <td>{poet.rootCatId}</td>
                <td>{poet.deathPlace}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        count={totalPoetsPages}
        page={poetsPage}
        onChange={(e, page) => setPoetsPage(page)}
        variant="outlined"
        shape="rounded"
      />
    </TableContainer>
  );
};
export default Table;

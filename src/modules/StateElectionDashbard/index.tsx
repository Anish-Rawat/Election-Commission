import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import PartyResultCard from "./components/PartyResultCard";
import { ElectionDataState } from "./type";
import PartyResultTable from "./components/PartyResultTable";
import PieChart from "./components/PieChart";
import Navbar from "../../components/navbar";

const StateElectionDashboard = () => {
  const [error, setError] = useState<string | null>(null);
  const [electionData, setElectionData] = useState<ElectionDataState | null>(
    null
  );

  const pieChartData = electionData?.partyResults?.cards;

  const fetchData = async () => {
    try {
      const response = await fetch("/utils/results.json");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setElectionData(data);
      console.log(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box>
        {error && <p>Error fetching data: {error}</p>}

        {electionData && (
          <Box>
            <Navbar/>
            <Header state={electionData.state} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {electionData.partyResults.cards.map((card) => (
                <PartyResultCard key={card.partyId} card={card} />
              ))}
            </Box>
            <PartyResultTable partyWiseTable={electionData.partyWiseTable} />
            <PieChart pieChartData={pieChartData} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default StateElectionDashboard;

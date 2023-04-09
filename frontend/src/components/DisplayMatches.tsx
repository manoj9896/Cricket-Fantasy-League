import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { CriketMatch } from "../apis";
import { MatchOccurrence, MatchProps } from "../types";
import MatchInfoCard from "./card/MatchInfoCard";

interface PropsType {
  type: MatchOccurrence;
}

function DisplayMatches({ type }: PropsType) {
  const [matches, setMatches] = useState<MatchProps[]>();

  const getMatches = async () => {
    const matchesToDisplay = await CriketMatch.getMatches(type);
    setMatches(matchesToDisplay);
  };

  useEffect(() => {
    getMatches();
  }, [type]);

  return (
    <Box sx={{ margin: "1rem" }}>
      <Grid container spacing={2} wrap={"wrap"} justifyContent="center">
        {matches?.map((match) => {
          return (
            <Grid item xs={12} md={6} lg={3} key={match.matchInfo.matchId}>
              <MatchInfoCard matchInfo={match?.matchInfo} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default DisplayMatches;

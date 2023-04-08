import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { getStreamURL } from "../../apis";
import { MatchInfo } from "../../types";

interface PropsType {
  matchInfo?: MatchInfo;
}

function MatchInfoCard({ matchInfo }: PropsType) {
  return (
    <Card sx={{ maxWidth: "320px" }}>
      <CardActionArea>
        <Grid container>
          <Grid item xs={6} md={6} lg={6}>
            <CardMedia
              component="img"
              height="140"
              image={getStreamURL(matchInfo?.team1?.teamId)}
              alt="green iguana"
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <CardMedia
              component="img"
              height="140"
              image={getStreamURL(matchInfo?.team1?.teamId)}
              alt="green iguana"
            />
          </Grid>
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {matchInfo?.team1?.teamName} vs {matchInfo?.team2?.teamName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MatchInfoCard;

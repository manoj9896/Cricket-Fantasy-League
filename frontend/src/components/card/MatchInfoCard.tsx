import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { getStreamURL } from "../../apis";
import { MatchInfo } from "../../types";

interface PropsType {
  matchInfo?: MatchInfo;
}

function MatchInfoCard({ matchInfo }: PropsType) {
  const timeToStart = new Date().getTime() - Number(matchInfo?.startDate);

  // const [timeLeft, setTimeLeft] = useState();

  return (
    <Card sx={{ padding: "0.5rem" }}>
      <CardActionArea>
        <Grid container spacing={6} alignContent="center">
          <Grid item xs={5} md={5} lg={5}>
            <CardMedia
              component="img"
              image={getStreamURL(matchInfo?.team1?.teamId)}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item xs={2} md={2} lg={2} alignSelf="center">
            <Typography variant="h6">vs</Typography>
          </Grid>
          <Grid item xs={5} md={5} lg={5}>
            <CardMedia
              component="img"
              image={getStreamURL(matchInfo?.team1?.teamId)}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {matchInfo?.team1?.teamName} vs {matchInfo?.team2?.teamName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {matchInfo?.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button>{timeToStart}</Button>
    </Card>
  );
}

export default MatchInfoCard;

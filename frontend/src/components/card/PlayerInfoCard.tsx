import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { getStreamURL } from "../../apis";
import { PlayerDetails } from "../../types";

interface PropsType {
  playerDetails: PlayerDetails;
}

function PlayerInfoCard({ playerDetails }: PropsType) {
  return (
    <Card sx={{ maxWidth: "320px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={getStreamURL(playerDetails?.faceImageId)}
          alt="green iguana"
          sx={{borderRadius: '50%'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
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

export default PlayerInfoCard;

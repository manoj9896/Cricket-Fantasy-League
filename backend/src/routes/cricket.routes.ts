import { Request, Response, Router } from "express";
import { CriketMatch } from "../models/services/cricBuzz.v2.service";
import { MatchOccurrence } from "../types";

const iplRouter = Router();

iplRouter.get("/", (req: Request, res: Response) => {
  res.send("Testing ipl Router");
});

iplRouter.get("/matches/:matchType", async (req: Request, res: Response) => {
  const { matchType } = req?.params;
  const matches = await CriketMatch.getMatchesByMatchType(
    matchType as MatchOccurrence
  );
  res.json(matches);
});

iplRouter.get("/image/:imageId", async (req: Request, res: Response) => {
  const { imageId } = req?.params;
  const image = await CriketMatch.getImageById(Number(imageId));
  image.data.pipe(res);
});

export default iplRouter;

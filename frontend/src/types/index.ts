export type MatchOccurrence = "live" | "recent" | "upcoming";

export interface Team {
  teamId: number;
  teamName: string;
  teamSName: string;
  imageId: number;
}

export interface MatchVenue {
  id: number;
  ground: string;
  city: string;
  timezone: string;
  latitude: string;
  longitude: string;
}

export interface MatchInfo {
  matchId: number;
  seriesId: number;
  seriesName: string;
  matchDesc: string;
  matchFormat: string;
  startDate: string;
  endDate: string;
  state: string;
  status: string;
  team1: Team;
  team2: Team;
  venueInfo: MatchVenue;
  currBatTeamId: number;
  seriesStartDt: string;
  seriesEndDt: string;
  isTimeAnnounced: boolean;
  stateTitle: string;
  isFantasyEnabled: boolean;
}

export interface MatchProps {
  matchInfo: MatchInfo;
  matchScore?: any;
}
export interface PlayerDetails {
  id: number;
  name: string;
  fullName: string;
  nickName: string;
  captain: boolean;
  role: string;
  keeper: boolean;
  substitute: boolean;
  teamId: number;
  battingStyle: string;
  bowlingStyle: string;
  faceImageId: number;
}

export interface MatchDetails {
  team1: {
    id: number;
    name: string;
    playerDetails: PlayerDetails[];
    shortName: string;
  };
  team2: {
    id: number;
    name: string;
    playerDetails: PlayerDetails[];
    shortName: number;
  };
}

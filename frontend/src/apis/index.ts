import axios from "axios";
import { MatchOccurrence, MatchProps } from "../types";

const baseURL = "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: baseURL,
});

export const getStreamURL = (id: number) => {
  // return `${baseURL}/ipl/image/${id}`;
  return "https://th.bing.com/th/id/R.3f7d964c48be6509da50d3396efc8514?rik=zEYqxFaZDGwoMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-MXctD4ErbT8%2fUxrU3wNfnkI%2fAAAAAAAAAGw%2ffmdP5wboigA%2fs1600%2fHdhut.blogspot%2b%25252815%252529.jpg&ehk=xV7lrJKTT2%2fnYQUVNoxnM42dHs9DZheKz1xSq2BJrKI%3d&risl=&pid=ImgRaw&r=0";
};

export class CriketMatch {
  static async getMatches(type: MatchOccurrence): Promise<Array<MatchProps>> {
    // const res = await api.get(`/ipl/matches/${type}`);
    // console.log("check data res", res);
    return [
      {
        "matchInfo": {
          "matchId": 66211,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "9th Match",
          "matchFormat": "T20",
          "startDate": "1680789600000",
          "endDate": "1680802200000",
          "state": "Complete",
          "status": "Kolkata Knight Riders won by 81 runs",
          "team1": {
            "teamId": 63,
            "teamName": "Kolkata Knight Riders",
            "teamSName": "KKR",
            "imageId": 225646
          },
          "team2": {
            "teamId": 59,
            "teamName": "Royal Challengers Bangalore",
            "teamSName": "RCB",
            "imageId": 225643
          },
          "venueInfo": {
            "id": 31,
            "ground": "Eden Gardens",
            "city": "Kolkata",
            "timezone": "+05:30",
            "latitude": "22.564527",
            "longitude": "88.343247"
          },
          "currBatTeamId": 63,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "KKR Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 204,
              "wickets": 7,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 123,
              "wickets": 10,
              "overs": 17.4
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66208,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "8th Match",
          "matchFormat": "T20",
          "startDate": "1680703200000",
          "endDate": "1680715800000",
          "state": "Complete",
          "status": "Punjab Kings won by 5 runs",
          "team1": {
            "teamId": 65,
            "teamName": "Punjab Kings",
            "teamSName": "PBKS",
            "imageId": 225648
          },
          "team2": {
            "teamId": 64,
            "teamName": "Rajasthan Royals",
            "teamSName": "RR",
            "imageId": 225647
          },
          "venueInfo": {
            "id": 380,
            "ground": "Barsapara Cricket Stadium",
            "city": "Guwahati",
            "timezone": "+05:30",
            "latitude": "26.094292",
            "longitude": "91.785187"
          },
          "currBatTeamId": 65,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "PBKS Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 197,
              "wickets": 4,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 192,
              "wickets": 7,
              "overs": 19.6
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66204,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "7th Match",
          "matchFormat": "T20",
          "startDate": "1680616800000",
          "endDate": "1680629400000",
          "state": "Complete",
          "status": "Gujarat Titans won by 6 wkts",
          "team1": {
            "teamId": 61,
            "teamName": "Delhi Capitals",
            "teamSName": "DC",
            "imageId": 225644
          },
          "team2": {
            "teamId": 971,
            "teamName": "Gujarat Titans",
            "teamSName": "GT",
            "imageId": 235085
          },
          "venueInfo": {
            "id": 51,
            "ground": "Arun Jaitley Stadium",
            "city": "Delhi",
            "timezone": "+05:30",
            "latitude": "28.637891",
            "longitude": "77.243073"
          },
          "currBatTeamId": 971,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "GT Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 162,
              "wickets": 8,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 163,
              "wickets": 4,
              "overs": 18.1
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66197,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "6th Match",
          "matchFormat": "T20",
          "startDate": "1680530400000",
          "endDate": "1680543000000",
          "state": "Complete",
          "status": "Chennai Super Kings won by 12 runs",
          "team1": {
            "teamId": 58,
            "teamName": "Chennai Super Kings",
            "teamSName": "CSK",
            "imageId": 225641
          },
          "team2": {
            "teamId": 966,
            "teamName": "Lucknow Super Giants",
            "teamSName": "LSG",
            "imageId": 228727
          },
          "venueInfo": {
            "id": 11,
            "ground": "MA Chidambaram Stadium",
            "city": "Chennai",
            "timezone": "+05:30",
            "latitude": "13.06282",
            "longitude": "80.279274"
          },
          "currBatTeamId": 58,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "CSK Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 217,
              "wickets": 7,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 205,
              "wickets": 7,
              "overs": 19.6
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66190,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "5th Match",
          "matchFormat": "T20",
          "startDate": "1680444000000",
          "endDate": "1680456600000",
          "state": "Complete",
          "status": "Royal Challengers Bangalore won by 8 wkts",
          "team1": {
            "teamId": 62,
            "teamName": "Mumbai Indians",
            "teamSName": "MI",
            "imageId": 225645
          },
          "team2": {
            "teamId": 59,
            "teamName": "Royal Challengers Bangalore",
            "teamSName": "RCB",
            "imageId": 225643
          },
          "venueInfo": {
            "id": 27,
            "ground": "M.Chinnaswamy Stadium",
            "city": "Bengaluru",
            "timezone": "+05:30",
            "latitude": "12.978853",
            "longitude": "77.599533"
          },
          "currBatTeamId": 59,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "RCB Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 171,
              "wickets": 7,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 172,
              "wickets": 2,
              "overs": 16.2
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66183,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "4th Match",
          "matchFormat": "T20",
          "startDate": "1680429600000",
          "endDate": "1680442200000",
          "state": "Complete",
          "status": "Rajasthan Royals won by 72 runs",
          "team1": {
            "teamId": 64,
            "teamName": "Rajasthan Royals",
            "teamSName": "RR",
            "imageId": 225647
          },
          "team2": {
            "teamId": 255,
            "teamName": "Sunrisers Hyderabad",
            "teamSName": "SRH",
            "imageId": 225649
          },
          "venueInfo": {
            "id": 80,
            "ground": "Rajiv Gandhi International Stadium",
            "city": "Hyderabad",
            "timezone": "+05:30",
            "latitude": "17.406495",
            "longitude": "78.550451"
          },
          "currBatTeamId": 64,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "RR Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 203,
              "wickets": 5,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 131,
              "wickets": 8,
              "overs": 19.6
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66176,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "3rd Match",
          "matchFormat": "T20",
          "startDate": "1680357600000",
          "endDate": "1680370200000",
          "state": "Complete",
          "status": "Lucknow Super Giants won by 50 runs",
          "team1": {
            "teamId": 966,
            "teamName": "Lucknow Super Giants",
            "teamSName": "LSG",
            "imageId": 228727
          },
          "team2": {
            "teamId": 61,
            "teamName": "Delhi Capitals",
            "teamSName": "DC",
            "imageId": 225644
          },
          "venueInfo": {
            "id": 485,
            "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
            "city": "Lucknow",
            "timezone": "+05:30",
            "latitude": "26.846694",
            "longitude": "80.946166"
          },
          "currBatTeamId": 966,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "LSG Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 193,
              "wickets": 6,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 143,
              "wickets": 9,
              "overs": 19.6
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66173,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "2nd Match",
          "matchFormat": "T20",
          "startDate": "1680343200000",
          "endDate": "1680355800000",
          "state": "Complete",
          "status": "Punjab Kings won by 7 runs (DLS method)",
          "team1": {
            "teamId": 65,
            "teamName": "Punjab Kings",
            "teamSName": "PBKS",
            "imageId": 225648
          },
          "team2": {
            "teamId": 63,
            "teamName": "Kolkata Knight Riders",
            "teamSName": "KKR",
            "imageId": 225646
          },
          "venueInfo": {
            "id": 46,
            "ground": "Punjab Cricket Association IS Bindra Stadium",
            "city": "Mohali",
            "timezone": "+05:30",
            "latitude": "30.690905",
            "longitude": "76.737455"
          },
          "currBatTeamId": 65,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "PBKS Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 191,
              "wickets": 5,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 146,
              "wickets": 7,
              "overs": 15.6
            }
          }
        }
      },
      {
        "matchInfo": {
          "matchId": 66169,
          "seriesId": 5945,
          "seriesName": "Indian Premier League 2023",
          "matchDesc": "1st Match",
          "matchFormat": "T20",
          "startDate": "1680271200000",
          "endDate": "1680283800000",
          "state": "Complete",
          "status": "Gujarat Titans won by 5 wkts",
          "team1": {
            "teamId": 58,
            "teamName": "Chennai Super Kings",
            "teamSName": "CSK",
            "imageId": 225641
          },
          "team2": {
            "teamId": 971,
            "teamName": "Gujarat Titans",
            "teamSName": "GT",
            "imageId": 235085
          },
          "venueInfo": {
            "id": 50,
            "ground": "Narendra Modi Stadium",
            "city": "Ahmedabad",
            "timezone": "+05:30",
            "latitude": "23.091785",
            "longitude": "72.597465"
          },
          "currBatTeamId": 971,
          "seriesStartDt": "1680220800000",
          "seriesEndDt": "1685404800000",
          "isTimeAnnounced": true,
          "stateTitle": "GT Won",
          "isFantasyEnabled": true
        },
        "matchScore": {
          "team1Score": {
            "inngs1": {
              "inningsId": 1,
              "runs": 178,
              "wickets": 7,
              "overs": 19.6
            }
          },
          "team2Score": {
            "inngs1": {
              "inningsId": 2,
              "runs": 182,
              "wickets": 5,
              "overs": 19.2
            }
          }
        }
      }
    ];
  }
}

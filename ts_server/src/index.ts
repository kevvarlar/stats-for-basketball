import express, {Express, Request, Response} from 'express';
import 'dotenv/config';
import path from 'path';
import axios from 'axios';
const app: Express = express();
const port = process.env.port || 3000;

type OnlyNumbers = {
  [key: string]: number | undefined;
};

const validTeams: OnlyNumbers = {
  'ATL': 1, 'BKN': 1, 'BOS': 1, 'CHA': 1, 'CHI': 1, 'CLE': 1, 'DAL': 1, 'DEN': 1, 'DET': 1, 'GSW': 1, 'HOU': 1, 'IND': 1, 'LAC': 1, 'LAL': 1, 'MEM': 1, 'MIA': 1, 'MIL': 1, 'MIN': 1, 'NOP': 1, 'NYK': 1, 'OKC': 1, 'ORL': 1, 'PHI': 1, 'PHX': 1, 'POR': 1, 'SAC': 1, 'SAS': 1, 'TOR': 1, 'UTA': 1, 'WAS': 1
};

interface Teams {
  id: string,
  name: string,
  alias: string,
  market: string
}

interface TeamsData {
  teams: Teams[]
}

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../../client/dist')))
app.get('/api', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/api/teams', (req: Request, res: Response) => {
  axios.get<TeamsData>('https://api.sportradar.com/nba/trial/v8/en/league/teams.json?api_key=' + process.env.API_KEY)
    .then(( { data }: Axios.AxiosXHR<TeamsData> ) => {
      let teams = data.teams.filter((team) => validTeams[team.alias]);
      res.send(teams);
    })
    .catch(() => {
      res.status(500).send('Sorry there was a problem with the server')
    })
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '/../../client/dist'))
});

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
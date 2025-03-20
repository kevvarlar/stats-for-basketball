import express, {Express, Request, Response} from 'express';
import 'dotenv/config';
import path from 'path';
import axios from 'axios';
import controller from './controller.ts';
const app: Express = express();
const port = process.env.port || 3000;

const validTeams: Set<string> = new Set([
  'ATL', 'BKN', 'BOS', 'CHA', 'CHI', 'CLE', 'DAL', 'DEN', 'DET', 'GSW', 'HOU', 'IND', 'LAC', 'LAL', 'MEM', 'MIA', 'MIL', 'MIN', 'NOP', 'NYK', 'OKC', 'ORL', 'PHI', 'PHX', 'POR', 'SAC', 'SAS', 'TOR', 'UTA', 'WAS'
]);

interface Teams {
  id: string,
  name: string,
  alias: string,
  market: string,
  favorite?: boolean
}

interface TeamsData {
  teams: Teams[]
}

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../../client/dist')))
app.get('/api', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/api/teams', async (req: Request, res: Response) => {
  try {
    const { data }: Axios.AxiosXHR<TeamsData> = await axios.get<TeamsData>('https://api.sportradar.com/nba/trial/v8/en/league/teams.json?api_key=' + process.env.API_KEY);
    const favorite = await controller.findFavoriteTeam();
    res.send(data.teams.filter((team) => {
      if (favorite.id > -1 && team.alias === favorite.team) {
        team.favorite = true;
      }
      return validTeams.has(team.alias);
    }));
  }
  catch {
    res.status(500).send('Sorry there was a problem with the server');
  }
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '/../../client/dist'))
});

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
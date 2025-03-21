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

interface Roster {
  favorite: boolean
}

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../../client/dist')));

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello World');
});

//Gets a single team
app.get('/api/team', async (req: Request, res: Response) => {
  let { team, id } = req.query;
  team = String(team);
  id = String(id);
  if (validTeams.has(team)) {
    try {
      const responseRoster: Axios.AxiosXHR<Roster> = await axios.get<Roster>('https://api.sportradar.com/nba/trial/v8/en/teams/' + id + '/profile.json?api_key=' + process.env.API_KEY);
      const responseStats = await axios.get('https://api.sportradar.com/nba/trial/v8/en/seasons/2024/REG/teams/' + id + '/statistics.json?api_key=' + process.env.API_KEY);
      const roster: Roster = responseRoster.data;
      const stats = responseStats.data;
      const favorite = await controller.findFavoriteTeam();
      if (favorite.id > -1 && team === favorite.team) {
        roster.favorite = true;
      }
      res.send({ roster, stats })
    }
    catch {
      res.status(500).send('Sorry there was a problem with the server');
    }
  } else {
    res.sendStatus(404);
  }
});

//Gets all the NBA Teams
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

// Creates or Updates a team as favorite
app.post('/api/:team/favorite', async (req: Request, res: Response) => {
  const team = req.params.team;
  if (validTeams.has(team)) {
    try {
      const created = await controller.createFavoriteTeam(team);
      created.modifiedCount > 1 ? res.status(200).send('Team updated as favorite') : created.modifiedCount === 0 ? res.sendStatus(204) : res.status(201).send('Team marked as favorite');
    }
    catch {
      res.status(500).send('Sorry there was a problem with the server');
    }
  } else {
    res.status(404).send('Invalid Team');
  }
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '/../../client/dist/index.html'));
});

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
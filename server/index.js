const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 3000;
const controller = require('./controller.js');
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const validTeams = {
  'ATL': 1, 'BKN': 1, 'BOS': 1, 'CHA': 1, 'CHI': 1, 'CLE': 1, 'DAL': 1, 'DEN': 1, 'DET': 1, 'GSW': 1, 'HOU': 1, 'IND': 1, 'LAC': 1, 'LAL': 1, 'MEM': 1, 'MIA': 1, 'MIL': 1, 'MIN': 1, 'NOP': 1, 'NYK': 1, 'OKC': 1, 'ORL': 1, 'PHI': 1, 'PHX': 1, 'POR': 1, 'SAC': 1, 'SAS': 1, 'TOR': 1, 'UTA': 1, 'WAS': 1
};

app.get('/api/team', (req, res) => {
  if (!(validTeams[req.query.team])) {
    res.status(404).send('Team not found');
    return;
  }
  axios.get('https://api.sportradar.com/nba/trial/v8/en/league/teams.json?api_key=' + process.env.API_KEY)
    .then(response => {
      const teams = response.data.teams;
      const team = teams.find(team => team.alias === req.query.team);
      axios.get('https://api.sportradar.com/nba/trial/v8/en/teams/'+ team.id +'/profile.json?api_key=' + process.env.API_KEY)
        .then(response => {
          const roster = response.data;
          controller.findFavoriteTeam()
            .then((favorite) => {
              if (favorite.length > 0 && favorite[0].team === team.alias) {
                roster.favorite = true;
              }
              axios.get('https://api.sportradar.com/nba/trial/v8/en/seasons/2024/REG/teams/'+ team.id +'/statistics.json?api_key=' + process.env.API_KEY)
                .then(response => {
                  const stats = response.data;
                  res.status(200).send({roster, stats});
                })
                .catch(err => {
                  res.status(500).send('An error occurred');
                });
                })
            .catch(err => {
              res.status(500).send('An error occurred');
            });
        })
        .catch(err => {
          res.status(500).send('An error occurred');
        });
    })
    .catch(err => {
      res.status(500).send('An error occurred');
    });
});

app.get('/api/teams', (req, res) => {
  axios.get('https://api.sportradar.com/nba/trial/v8/en/league/teams.json?api_key=' + process.env.API_KEY)
    .then(response => {
      controller.findFavoriteTeam()
        .then((result) => {
          if (result.length > 0) {
            response.data.teams.forEach(team => {
              if (team.alias === result[0].team) {
                team.favorite = true;
              }
            });
          }
          res.status(200).send(response.data.teams.filter(team => validTeams[team.alias]));
        })
    })
    .catch(err => {
      res.status(500).send('An error occurred');
    });
})

app.post('/api/:team/favorite', (req, res) => {
  const team = req.params.team;
  if (validTeams[team]) {
    controller.createFavoriteTeam(team)
      .then((result) => {
        if (result.modifiedCount > 0) {
          res.status(204).send('Team updated as favorite');
        } else {
          res.status(201).send('Team marked as favorite');
        }
      })
      .catch(err => {
        res.status(500).send('An error occurred');
      });
  } else {
    res.status(404).send('Invalid team');
  }
});

app.get('/api/:team/favorite', (req, res) => {
  if (!(validTeams[req.params.team])) {
    res.status(404).send('Team not found');
    return;
  }
  controller.findFavoriteTeam()
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send('No favorite team found');
      } else {
        res.status(200).send(result.team);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
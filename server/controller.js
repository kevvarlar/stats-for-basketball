const { Favorite } = require('./db.js');

const findFavoriteTeam = () => {
  return Favorite.find({id: 1})
}

const createFavoriteTeam = (team) => {
  return Favorite.find({id: 1})
    .then((favorite) => {
      if (favorite.length === 0) {
        return Favorite.create({id: 1, team: team})
      } else {
        return Favorite.updateOne({id: 1}, {team: team})
      }
    })
    .catch((err) => {
      console.log(err)
      return new Promise((resolve, reject) => {
        reject(err);
      });
    })
}

module.exports.findFavoriteTeam = findFavoriteTeam;

module.exports.createFavoriteTeam = createFavoriteTeam;
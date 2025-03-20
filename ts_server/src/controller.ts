import Favorite from './db.ts';

interface favoriteTeam {
  id: number,
  team: string
}

const findFavoriteTeam = async (): Promise<favoriteTeam> => {
  try {
    const result: favoriteTeam[] = await Favorite.find({id: 1})
    return { id: result[0].id, team: result[0].team }
  }
  catch {
    return { id: -1, team: '' };
  }
}
const createFavoriteTeam = (team: string) => {
  return;
}

export default { findFavoriteTeam, createFavoriteTeam };
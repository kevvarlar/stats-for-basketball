import Favorite from './db.ts';

interface favoriteTeam {
  id: number,
  team: string
}

interface create {
  modifiedCount: number
}

const findFavoriteTeam = async (): Promise<favoriteTeam> => {
  try {
    const result: favoriteTeam[] = await Favorite.find({id: 1});
    return { id: result[0].id, team: result[0].team };
  }
  catch {
    return { id: -1, team: '' };
  }
}
const createFavoriteTeam = async (team: string): Promise<create> => {
  try {
    const favorite = await findFavoriteTeam();
    let result;
    if (favorite.id > -1) {
      let created: create | null = await Favorite.updateOne({ id: 1 }, { team });
      created === null ? result = { modifiedCount: 0 } : result = created;
    } else {
      result = { modifiedCount: -1 };
      await Favorite.create({ id: 1, team });
    }
    return result;
  }
  catch {
    return { modifiedCount: 0 };
  }
}

export default { findFavoriteTeam, createFavoriteTeam };
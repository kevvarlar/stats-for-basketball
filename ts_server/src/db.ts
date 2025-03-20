import mongoose from 'mongoose';
import 'dotenv/config';
const URL = process.env.DB_URL || '';
mongoose.connect(URL);

const db = mongoose.connection;

db.on('error', () => console.error('Connection Error'));
db.once('open', () => console.log('Connected to MongoDB'));

const Schema = mongoose.Schema;

interface IFavorite {
  id: number,
  team: string
}

const FavoriteSchema = new Schema<IFavorite>({
  id: {
    type: Number,
    required: true
  },
  team: {
    type: String,
    required: true
  },
});

const Favorite = mongoose.model<IFavorite>('Favorite', FavoriteSchema);

export default Favorite;
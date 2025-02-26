const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/statsForBasketball');

const db = mongoose.connection;

db.on('error', () => console.error('Connection Error'));
db.once('open', () => console.log('Connected to MongoDB'));

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  // player: {
  //   type: String,
  //   required: true
  // },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
});

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports.Favorite = Favorite;
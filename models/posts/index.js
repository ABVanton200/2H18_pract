const mongoose = require('mongoose');
const { autoIncrement } = require('mongoose-plugin-autoinc');
const env = require('dotenv').load();

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const conn = mongoose.createConnection(process.env.URL, { useNewUrlParser: true });

const postSchema = new Schema({
  id: {
    type: 'number',
  },
  title: {
    type: 'string',
  },
  categories: {
    type: 'string',
  },
  content: {
    type: 'string',
  },
});

postSchema.plugin(autoIncrement, { model: 'posts', field: 'id' });
const Post = conn.model('posts', postSchema);

module.exports = Post;

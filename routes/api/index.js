const _ = require('lodash');
const Post = require('../../models/posts');

class Router {
  static handle(x) {
    const r = x.Router();
    r
      .route('/')
      .get(async (req, res) => {
        const posts = await Post.find();
        const edited = posts.map(el => _.pick(el, ['id', 'title', 'categories', 'content']));
        res.json(edited);
      })
      .post(async (req, res) => {
        const { title = '', categories = '', content = '' } = req.body;
        const result = await Post.create({ title, categories, content });
        res.json(_.pick(result, ['id', 'title', 'categories', 'content']));
      });

    r
      .route('/:id')
      .get(async (req, res) => {
        const id = req.params.id || -1;
        const post = await Post.findOne({ id });
        res.json(_.pick(post, ['id', 'title', 'categories', 'content']));
      })
      .delete(async (req, res) => {
        const id = req.params.id || -1;
        const post = await Post.findOne({ id });
        const result = await Post.deleteOne({ id });
        res.json(_.pick(post, ['id', 'title', 'categories', 'content']));
      });

    return r;
  }
}

module.exports = Router;

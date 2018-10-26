const React = require('react');
const { Link } = require('react-router-dom');
const { get } = require('axios');

const Wrapper = require('./wrapper');
const Button = require('./button');
const Title = require('./title');

const headers = { 'Content-type': 'application/json' };

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentWillMount() {
    const posts = await get('/api/posts', headers);
    this.setState({
      posts,
    });
  }

  render() {
    const allPosts = (this.state.posts).map(x => (<Link key={x.id} to={`/posts/${x.id}`}>{x.title}</Link>));
    return (
      <Wrapper>
        <Title>Posts</Title>
        <Button to="/posts/new">Add new post</Button>
        {allPosts}
      </Wrapper>
    );
  }
}

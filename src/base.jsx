const React = require('react');
const { render } = require('react-dom');
const { BrowserRouter: Router, Route } = require('react-router-dom');

const Wrapper = require('./wrapper');
const Button = require('./button');
const Title = require('./title');

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Posts} />
      <Route path="/posts/new" component={Add} />
      <Route path="/posts/:id" component={Post} />
    </div>
  </Router>
);

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <Wrapper>
        <Title>Posts</Title>
        <Button to="/posts/new">Add new post</Button>
      </Wrapper>
    )      
  }
}
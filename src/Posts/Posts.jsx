import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'axios';

import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import PrettyLink from '../PrettyLink/PrettyLink';
import Title from '../Title/Title';

const headers = { 'Content-type': 'application/json' };

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
    };
  }

  async componentDidMount() {
    const { data } = await get('/api/posts', headers);

    this.setState({
      allPosts: data,
    });
  }


  render() {
    const { allPosts } = this.state;
    const posts = allPosts.map(x => (<PrettyLink key={x.id} to={`/posts/${x.id}`}>{x.title}</PrettyLink>));

    return (
      <Wrapper>
        <Button right="true" to="/posts/new">Add new post</Button>
        <Title>Posts</Title>
        {allPosts.length === 0 && ('Загрузка постов')}
        {posts}
      </Wrapper>
    );
  }
}

export default Posts;

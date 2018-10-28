import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Title from '../Title/Title';

const headers = { 'Content-type': 'application/json' };

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      categories: '',
      content: '',
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { data } = await axios.get(`/api/posts/${id}`, headers);

    this.setState({
      title: data.title,
      categories: data.categories,
      content: data.content,
    });
  }

  async handleDelete(e) {
    const { match, history } = this.props;
    const { id } = match.params;
    const post = await axios.delete(`/api/posts/${id}`);
    this.setState({
      title: '',
      categories: '',
      content: '',
    });

    history.push('/');
  }

  render() {
    const { title, categories, content } = this.state;
    return (
      <Wrapper>
        <Title>{title}</Title>
        <div>{categories}</div>
        <div>{content}</div>
        <Button right="true" warning="true" onClick={this.handleDelete} to="#">Delete post</Button>
        <Button to="/">All posts</Button>
      </Wrapper>
    );
  }
}

export default Post;

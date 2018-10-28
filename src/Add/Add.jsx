import React from 'react';
import { Link } from 'react-router-dom';
import { post } from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import PrettyInput from '../PrettyInput/PrettyInput';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      categories: '',
      content: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCat = this.handleChangeCat.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChangeTitle(e) {
    const text = e.target.value || '';

    this.setState({
      title: text,
    });
  }

  handleChangeCat(e) {
    const text = e.target.value || '';

    this.setState({
      categories: text,
    });
  }

  handleChangeContent(e) {
    const text = e.target.value || '';

    this.setState({
      content: text,
    });
  }

  async handleFormSubmit(e) {
    const { title, categories, content } = this.state;
    const { history } = this.props;

    if (!title || !categories || !content) {
      toast.warn('Заполните все поля', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    } else {
      const result = await post('/api/posts', { title, categories, content });

      history.push('/');
    }
  }

  render() {
    const { title, categories, content } = this.state;

    return (
      <Wrapper>
        <form method="POST">
          <PrettyInput label="Title" value={title} onInputChange={this.handleChangeTitle} />
          <PrettyInput label="Categories" value={categories} onInputChange={this.handleChangeCat} />
          <PrettyInput label="Content" value={content} onInputChange={this.handleChangeContent} />

          <Button onClick={this.handleFormSubmit} to="#">Send</Button>
          <Button right="true" warning="true" to="/">Cancel</Button>
        </form>
        <ToastContainer />
      </Wrapper>
    );
  }
}

export default Add;

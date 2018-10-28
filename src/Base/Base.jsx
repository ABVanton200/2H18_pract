import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Posts from '../Posts/Posts';
import Add from '../Add/Add';
import Post from '../Post/Post';

const BasicExample = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/new" component={Add} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default BasicExample;

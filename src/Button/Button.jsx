import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`  
  display: inline-block;
  background: ${props => (props.warning === 'true' ? 'red' : 'blue')};
  float: ${props => (props.right === 'true' ? 'right' : 'none')};
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  margin: 15px 0px;
  padding: 10px 20px;  
  border-radius: 3px;
`;

export default Button;

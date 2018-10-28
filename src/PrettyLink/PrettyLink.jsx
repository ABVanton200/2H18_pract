import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrettyLink = styled(Link)`
  display: block;

  color: #0275d8;
  text-decoration: none;
  font-size: 16px;
  margin: 5px 0px;  
`;

export default PrettyLink;

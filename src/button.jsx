const React = require('react');
const styled = require('styled-components');
const { Link } = require('react-router-dom');

const Button = styled(Link)`  
  background: ${props => (props.warning ? 'red' : 'blue')};
  color: "white";

  font-size: 16px;
  margin: 5px;
  padding: 5px 10px;  
  border-radius: 3px;
`;

module.exports = Button;

import React from 'react';

const PrettyInput = ({ label, value, onInputChange }) => {
  return (
    <div>
      <div>{label}</div>
      <input type="text" onChange={onInputChange} value={value} />
    </div>
  );
};

export default PrettyInput;

import React from 'react';
import C4 from './C4';

function C3({ date }) {
  return (
    <div>
      <h2>Child 3</h2>
      <C4 date={date} />
    </div>
  );
}

export default C3;

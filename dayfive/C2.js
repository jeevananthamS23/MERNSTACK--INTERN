import React from 'react';
import C3 from './C3';

function C2({ date }) {
  return (
    <div>
      <h2>Child 2</h2>
      <C3 date={date} />
    </div>
  );
}

export default C2;

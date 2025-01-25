import React from 'react';
import C5 from './C5';

function C4({ date }) {
  return (
    <div>
      <h2>Child 4</h2>
      <C5 date={date} />
    </div>
  );
}

export default C4;

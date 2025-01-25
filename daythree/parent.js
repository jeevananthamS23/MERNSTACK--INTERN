import React, { useState } from 'react';
import C1 from './C1';

function Parent() {
  // State in Parent component
  const [date] = useState(2005);

  return (
    <div>
      <h1>Parent Component</h1>
      <C1 date={date} />
    </div>
  );
}

export default Parent;

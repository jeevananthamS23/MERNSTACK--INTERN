
import C2 from './C2';

function C1({ date }) {

    
  return (
    <div>
      <h2>Child 1</h2>
     
      <C2 date={date} />
    </div>
  );
}

export default C1;

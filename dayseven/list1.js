import React from "react"


/*export default function Unlist( ){
     const items = [1,232,4,34];

  return (
    <>
    <ul>
    {
      items.map((item,i)=> (<li key={i}>{item}</li>))
    }
      </ul>
    </>
  );

}*/




import Li2 from "./list2"; // Importing the Li2 component

export default function Li1() {
  const items = [1, 232, 4, 34];

  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Li2 n={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

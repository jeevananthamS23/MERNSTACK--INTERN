import { useState } from "react";
import C22 from "./data_send_F_B_Child";

export default function C11() {
  const [user] = useState("parent");
  const [childData, setChildData] = useState(""); 

 
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <>
      <h1>This is data_send_F_B.........</h1>
      <C22 user={user} sendDataToParent={handleChildData} />
      <h1>Data from my child: {childData}</h1>
    </>
  );
}

import React from "react";
import useFetch from "../../customHook/useFetch";

const InfoHeader = () => {

  const {data} = useFetch('https://randomuser.me/api/')

  return (
    <div>
      {/* <h2>My {first}  is</h2>
      <p>{second}</p> */}
    </div>
  );
};

export default InfoHeader;

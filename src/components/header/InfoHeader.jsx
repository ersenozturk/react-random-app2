import React, { useState } from "react";
import useFetch from "../../customHook/useFetch";

const InfoHeader = () => {

  const {data} = useFetch('https://randomuser.me/api/')

  const [up, setUp] = useState('')

  return (

    <div>
      <h2>
        {up && 'name' }
      </h2>
    </div>
  );
};

export default InfoHeader;

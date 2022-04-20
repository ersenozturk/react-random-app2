import React, { useContext } from "react";
import Button from "../button/Button";
import man from "../../assets/man.svg";
import growingUpMan from "../../assets/growingUpMan.svg";
import growingUpWoman from "../../assets/growingUpWoman.svg";
import mail from "../../assets/mail.svg";
import woman from "../../assets/woman.svg";
import padlock from "../../assets/padlock.svg";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";
import { Context } from "../../contextHook/Contexts";
import useFetch from "../../customHook/useFetch";

const Icons = () => {
  const { data } = useFetch("https://randomuser.me/api/");

  // const {handleMouse} = useContext(Context)

  const searchType = () => {};

  const handleMouse = (e) => {
    console.log(e.target.id);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div id="1" onMouseOver={handleMouse}>
          {data?.gender === "male" ? (
            <img style={{ width: "50px", margin: "18px" }} src={man} alt="" />
          ) : (
            <img style={{ width: "50px", margin: "18px" }} src={woman} alt="" />
          )}
        </div>

        <div id="2" onMouseOver={handleMouse}>
          <img style={{ width: "50px", margin: "18px" }} src={mail} alt="" />
        </div>

        <div id="3" onMouseOver={handleMouse}>
          {data?.gender === "male" ? (
            <img style={{ width: "50px", margin: "18px" }} src={growingUpMan} alt="" />
          ) : (
            <img style={{ width: "50px", margin: "18px" }} src={growingUpWoman} alt="" />
          )}
        </div>

        <div id="4" onMouseOver={handleMouse}>
          <img style={{ width: "50px", margin: "18px" }} src={map} alt="" />
        </div>

        <div id="5" onMouseOver={handleMouse}>
          <img style={{ width: "50px", margin: "18px" }} src={phone} alt="" />
        </div>

        <div id="6" onMouseOver={handleMouse}>
          <img style={{ width: "50px", margin: "18px" }} src={padlock} alt="" />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Icons;

import React, { useEffect, useState } from "react";
import "./styles/topdevstyle.css";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";

const List = ({ dev }) => {
  const [addFavorite, setAddFavorite] = useState(false);
  const dispatch = useDispatch();

  const favorite = () => {
    setAddFavorite(!addFavorite);
    dispatch({ type: "ADD_FAV", payload: dev });
  };

  useEffect(() => {
    setAddFavorite(JSON.parse(localStorage.getItem("favColor")));
  }, []);

  useEffect(() => {
    localStorage.setItem("favColor", addFavorite);
  }, [addFavorite]);

  return (
    <div key={dev.id} className="parent">
      <img src={dev.image} alt={dev.name} className="image" />
      <img src={dev.ellipse} alt={dev.name} className="ellipse" />
      <MdFavorite
        size={30}
        style={
          addFavorite
            ? {
                color: "#ff4135",
                background: "#ffffff",
                borderRadius: "10px",
              }
            : {
                color: "#FFFFFF",
                background: "#BBBBBB",
                borderRadius: "10px",
              }
        }
        onClick={favorite}
      />
      <div className="name-hire">
        <div className="name">
          <p>{dev.name}</p>
          <small>{dev.money}</small>
        </div>
        <div className="hire">
          <button>Hire</button>
        </div>
      </div>
    </div>
  );
};

export default List;

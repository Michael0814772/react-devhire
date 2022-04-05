import React from "react";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";

const FavoriteList = ({ items }) => {
  const dispatch = useDispatch();

  const deleteFav = (items) => {
    dispatch({ type: "DELETE_FAV", payload: items });
    localStorage.removeItem("favColor");
  };

  return (
    <div key={items.id} className="parent">
      <img src={items.image} alt={items.name} className="image" />
      <img src={items.ellipse} alt={items.name} className="ellipse" />
      <MdFavorite
        size={30}
        style={{
          color: "#ff4135",
          background: "#ffffff",
          borderRadius: "10px",
        }}
        onClick={() => deleteFav(items)}
      />
      <div className="name-hire">
        <div className="name">
          <p>{items.name}</p>
          <small>{items.money}</small>
        </div>
        <div className="hire">
          <button>Hire</button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;

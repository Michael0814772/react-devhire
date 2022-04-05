import React from "react";
import { useSelector } from "react-redux";
import "./styles/topdevstyle.css";
import FavoriteList from "./FavoriteList"

const Favorite = () => {

  const fav = useSelector((store) => store);
  return (
    <div className="dev fav">
      <div className="top">
        <h1>Favorites</h1>
      </div>
      <div className="content">
        {fav.favorites.map(items => (
          <FavoriteList items={items} key={items.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;

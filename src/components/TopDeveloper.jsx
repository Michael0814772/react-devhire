import React from "react";
import { developer } from "./developer";
import "./styles/topdevstyle.css";
import List from "./List";

const TopDeveloper = () => {

  return (
    <div className="dev">
      <div className="top">
        <h1>Hire Top Developers</h1>
      </div>
      <div className="content">
        {developer.map((dev) => (
          <List dev={dev} key={dev.id} />
        ))}
      </div>
    </div>
  );
};

export default TopDeveloper;

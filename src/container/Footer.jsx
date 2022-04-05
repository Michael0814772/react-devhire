import React, { useState } from "react";
import "./style.css";
import useAxios from "../customAxios/useAxios";

const Footer = () => {
  const { data } = useAxios("https://api.terawork.com/resources");
  const [countrySelected, setCountrySelected] = useState("Naira");
  console.log(data?.data?.data.currencies);

  return (
    <div className="parent-footer">
      <div className="devhire">
        <p>© 2022 DevHire</p>
      </div>
      <div className="devhiretwo">
        <form>
          <select
            value={countrySelected}
            onChange={(e) => setCountrySelected(e.target.value)}
          >
            {data &&
              data?.data?.data.currencies.map((currence) => (
                <option value={currence.name} key={currence.id}>
                  {currence.name}
                </option>
              ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Footer;

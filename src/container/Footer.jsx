import React, { useState } from "react";
import "./style.css";
import useAxios from "../customAxios/useAxios";

const Footer = () => {
  const { data } = useAxios("https://api.terawork.com/resources");
  const [countrySelected, setCountrySelected] = useState("Naira");

  const searchSelectedCountry = data?.data?.data.currencies.find((obj) => {
    if (obj.name === countrySelected) {
      return true;
    }
    return false;
  });

  return (
    <div className="parent-footer">
      <div className="devhire">
        <p>© 2022 DevHire</p>
      </div>
      <div className="devhiretwo">
        <form className="footer-form">
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
          <img
            src={searchSelectedCountry?.flag_url}
            alt={searchSelectedCountry?.name}
            width="10px"
            height="10.34px"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;

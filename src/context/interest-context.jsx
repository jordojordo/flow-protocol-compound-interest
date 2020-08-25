import React, { useState, useEffect } from "react";
import CoinGecko from "coingecko-api";

const CoinGeckoClient = new CoinGecko();

export const InterestContext = React.createContext({
  compoundedArray: [],
  price: null,
  setCompoundedArray: () => {},
  setPrice: () => {},
});

export default (props) => {
  const [compounded, setCompounded] = useState([]);
  const [price, setPrice] = useState();

  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async (interest) => {
    let response = await CoinGeckoClient.coins.fetch("flow-protocol");
    setPrice(response.data.market_data.current_price.usd);
  };

  return (
    <InterestContext.Provider
      value={{
        compoundedArray: compounded,
        price: price,
        setCompoundedArray: setCompounded,
        setPrice: setPrice,
      }}
    >
      {props.children}
    </InterestContext.Provider>
  );
};

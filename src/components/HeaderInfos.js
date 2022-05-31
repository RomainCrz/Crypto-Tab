import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import TableFilters from "./TableFilters";

const HeaderInfos = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/global")
            .then((res) => setData(res.data.data));
    }, []);

    console.log(data);
    return (
        <div className="header-container">
            <ul className="title infos-mkt">
                <li>
                    <h1>
                        <img src="./assets/logo.png" alt="logo" /> Crypto Tower
                    </h1>
                </li>

                <li>
                    Crypto-monnaies :{" "}
                    {data.active_cryptocurrencies &&
                        data.active_cryptocurrencies.toLocaleString()}
                </li>
                <li>Marchés : {data.markets}</li>
            </ul>
            <ul className=" infos-mkt">
                <li className="global-mkt">
                    Global Market Cap :
                    <PercentChange
                        percent={data.market_cap_change_percentage_24h_usd}
                    />{" "}
                </li>
                <li>
                    BTC dominance :{" "}
                    {data.market_cap_percentage &&
                        data.market_cap_percentage.btc.toFixed(1) + "%"}
                </li>
                <li>
                    ETH dominance :{" "}
                    {data.market_cap_percentage &&
                        data.market_cap_percentage.eth.toFixed(1) + "%"}
                </li>
            </ul>
            <TableFilters />
        </div>
    );
};

export default HeaderInfos;

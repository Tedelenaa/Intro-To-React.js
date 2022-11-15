import React, { useEffect, useState } from "react";

const CustomAPIHook = (url) => {
  const [apiData, setApiData] = useState([]);

  const getAPI = async () => {
    let response = await fetch(url);
    let apiData = await response.json();
    setApiData(apiData);
  };

  useEffect(() => {
    getAPI();
  }, [apiData]);

  return [apiData];
};

export default CustomAPIHook;

import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    console.log(resId);

    const restInfo = await fetch(MENU_URL + resId);
    const json = await restInfo.json();
    setResInfo(json);
    console.log("restInfo", json);
  };

  return resInfo;
};

export default useRestaurantmenu;

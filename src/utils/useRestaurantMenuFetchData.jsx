import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenuFetchData = (restId) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_URL}${restId}`);
    const jsonData = await data.json();
    setMenuList(jsonData);
  };

  return menuList;
};

export default useRestaurantMenuFetchData;

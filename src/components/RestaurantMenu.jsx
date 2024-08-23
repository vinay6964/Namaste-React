import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resName, setResName] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const { restId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  fetchMenu = async () => {
    const data = await fetch(`${MENU_URL}${restId}`);
    const jsonData = await data.json();
    const { text } = jsonData?.data?.cards[0]?.card?.card;
    setResName(text);
    const menuData =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards;
    setMenuList(menuData);
  };

  return !resName ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resName}</h1>
      <h2>Menu</h2>
      <ul>
        {menuList?.map((item) => {
          return (
            <li key={item.card.info.id}>
              <p>
                {item.card.info.name} - Rs {item.card.info.price / 100}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

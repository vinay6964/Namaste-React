import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const RestaurantCategoryList = (props) => {
  console.log("🚀 ~ RestaurantCategoryList ~ props:", props)
  const [addedToCart, setAddedToCart] = useState(false);

  //subscribe to cart slice store
  const cartItems = useSelector((store) => {
    return store.cart.items
  })

  // dispatch
  const dispatch = useDispatch();
  const menuItems = props?.data?.card?.info?.name;
  const itemsPrice = props?.data?.card?.info?.price / 100;
  const imageId = props?.data?.card?.info?.imageId;
  const description = props?.data?.card?.info?.description;

  const shortenedDescription =
    description && description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  const handleAddItemInitial = (
    menuItems,
    itemsPrice,
    imageId,
    shortenedDescription
  ) => {
    const selectedItems = {
      menuItems: menuItems,
      price: itemsPrice ? itemsPrice : 100,
      imageId: imageId,
      description: shortenedDescription,
      count : 1
    };
    dispatch(addItems(selectedItems));
    setAddedToCart(true);
  };


  const handleItemAddition = (
    menuItems,
    itemsPrice,
    imageId,
    shortenedDescription
  ) => {

    const selectedItems = {
      menuItems: menuItems,
      price: itemsPrice ? itemsPrice : 100,
      imageId: imageId,
      description: shortenedDescription,
    };
    dispatch(addItems(selectedItems));
    console.log(cartItems)
  };

  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-sm hover:shadow-md">
      <div className="flex-1">
        <Typography
          variant="subtitle1"
          className="font-bold text-lg text-gray-900 cursor-pointer"
        >
          {menuItems}
        </Typography>
        <Typography
          variant="body1"
          className="font-semibold text-green-600 text-xl mt-2 cursor-pointer"
        >
          ₹{itemsPrice ? itemsPrice : 100}
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-600 mt-2 cursor-pointer"
        >
          {shortenedDescription}
        </Typography>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 object-cover rounded-lg shadow-md border border-gray-300 cursor-pointer"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
          alt={menuItems}
        />
        {!addedToCart && (
          <button
            className="mt-2 bg-red-500 text-black px-4 py-1 rounded-md hover:bg-green-600 transition-colors duration-200"
            onClick={() =>
              handleAddItemInitial(
                menuItems,
                itemsPrice,
                imageId,
                shortenedDescription
              )
            }
          >
            Add To Cart
          </button>
        )}
        {addedToCart && (
          <div class="flex items-center justify-center gap-0.5 p-2">
            <button class="bg-red-500 p-1 md:p-2 w-7 h-7 rounded-md font-medium text-white flex justify-center items-center">
              -
            </button>
            <p class="p-1 md:p-2 w-7 h-7 bg-slate-200 rounded-md flex justify-center items-center">
              1
            </p>
            <button class="bg-red-500 p-1 md:p-2 w-7 h-7 rounded-md font-medium text-white flex justify-center items-center"
             onClick={() =>
              handleItemAddition(
                menuItems,
                itemsPrice,
                imageId,
                shortenedDescription
              )
            }
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategoryList;

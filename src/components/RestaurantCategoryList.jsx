import React from 'react';
import Typography from '@mui/material/Typography';

const RestaurantCategoryList = (props) => {
  const menuItems = props?.data?.card?.info?.name;
  const itemsPrice = (props?.data?.card?.info?.price) / 100;
  const imageId = props?.data?.card?.info?.imageId;
  const description = props?.data?.card?.info?.description;

  const shortenedDescription =
    description && description.length > 100
      ? description.substring(0, 100) + '...'
      : description;

  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-sm hover:shadow-md">
      <div className="flex-1">
        <Typography variant="subtitle1" className="font-bold text-lg text-gray-900 cursor-pointer">
          {menuItems}
        </Typography>
        <Typography
          variant="body1"
          className="font-semibold text-green-600 text-xl mt-2 cursor-pointer"
        >
          ₹{itemsPrice ? itemsPrice : 100}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mt-2 cursor-pointer">
          {shortenedDescription}
        </Typography>
      </div>
      <img
        className="w-24 h-24 object-cover rounded-lg shadow-md border border-gray-300 cursor-pointer"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        alt={menuItems}
      />
    </div>
  );
};

export default RestaurantCategoryList;

import React,{useState} from 'react';
import RestaurantCategories from './RestaurantCategories';

const CategoryItems = (props) => {
  const [showItemsIndex,setShowItemsIndex] = useState(0);
  const resName = props?.data?.data?.cards[0]?.card?.card?.text;
  const ItemCategory = props?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  
  const requiredItemCategory = ItemCategory.filter((item) => {
    return item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {resName}
      </h1>
      <div className="space-y-6">
        {requiredItemCategory.map((items,index) => (
          <RestaurantCategories key={items.card.card.title} data={items} showItemsIndex={index === showItemsIndex ? true : false} setShowItemsIndex={()=>setShowItemsIndex(index)} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

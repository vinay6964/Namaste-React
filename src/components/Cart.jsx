import { useState } from "react";

const Cart = () => {
    
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Craving Saving Meal",
      price: 779,
      quantity: 3,
      total: 2337,
      img: "link_to_image_1",
    },
    {
      id: 2,
      name: "Party Bucket Meal",
      price: 649,
      quantity: 3,
      total: 1947,
      img: "link_to_image_2",
    },
    {
      id: 3,
      name: "Insta Reel Korean Roll Meal",
      price: 349,
      quantity: 3,
      total: 1047,
      img: "link_to_image_3",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta), // Avoid quantity < 1
              total: Math.max(1, item.quantity + delta) * item.price,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalAmount = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-8">
      {/* Left Side - Cart Items */}
      <div className="flex flex-col w-full lg:w-2/3">
        {items.length ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-6 p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-500">Price: ₹ {item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md mx-2"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-green-500 text-white px-2 py-1 rounded-md mx-2"
                >
                  +
                </button>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Right Side - Summary */}
      {items.length > 0 && (
        <div className="w-full lg:w-1/3 p-4 border rounded-md bg-gray-100 shadow-md">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <ul className="mb-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>₹ {item.total}</span>
              </li>
            ))}
          </ul>

          {/* Discount Section */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Apply Discount Code</label>
            <input
              type="text"
              placeholder="Enter promo code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-2 bg-blue-500 text-white w-full py-2 rounded-md">
              Apply
            </button>
          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>₹ {totalAmount}</span>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md font-bold">
            Proceed to Pay ₹ {totalAmount}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

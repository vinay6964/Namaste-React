import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/rest/:restId",
        element : <RestaurantMenu />
      }
    ]
  }
])

// console.log("router",router);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("🚀 ~ root:", root);
// root.render(<App />);
root.render(<RouterProvider router={router}/>)

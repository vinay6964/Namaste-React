import React, { lazy, Suspense, useContext, useState } from "react";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Cart from './components/Cart'


const Grocery = lazy(() =>  import('./components/Grocery'));
const About = lazy(()=> import('./components/About'))

const App = () => {
  const {userName} = useContext(UserContext);
  const [userLogged, setUserLogged] = useState(userName);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value = {{userName: userLogged, setUserLogged}} >
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
     </UserContext.Provider>
     </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About is loading...</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rest/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>It is Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

// console.log("router",router);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("🚀 ~ root:", root);
// root.render(<App />);
root.render(<RouterProvider router={router} />);

const { render,screen,fireEvent } = require("@testing-library/react")
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import '@testing-library/jest-dom'; 


it("Should load header component with a log in button", ()=> {

render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
)
   
//query
const logInButton = screen.getByRole("button",{name : "Log In"});
// const logInButton = screen.getByText("Log In");
expect(logInButton).toBeInTheDocument();
})

it("Should render the cart", ()=> {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    // const cartItem = screen.getByText("Cart (0)");
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})

it("Should change login to logout", ()=> {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
       
    //query
    const logInButton = screen.getByRole("button",{name : "Log In"});
    fireEvent.click(logInButton);
    const logOutButton = screen.getByRole("button",{name:(/Out/)})

    //Assertion
    expect(logOutButton).toBeInTheDocument();
})
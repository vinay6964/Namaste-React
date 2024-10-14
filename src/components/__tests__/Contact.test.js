import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Import this to extend Jest matchers
import Contact from "../Contact";

// test("Should load Contact Us Page", () => {
//     render(<Contact />);

//     const heading = screen.getByRole("button");
//     expect(heading).toBeInTheDocument();
// });

// // it and test are similar

// it("Should load 2 input boxes", () => {
//     render(<Contact />);

//     //Querying
//     const inputBoxes = screen.getAllByRole("textbox");
//     // inputBoxes is react element which is an object, or react fiber node


//     console.log("🚀 ~ test ~ inputBoxes:", inputBoxes.length)
//     expect(inputBoxes.length).toBe(3);
// });

describe("Contact Us Page test case", ()=> {
    test("Should load Contact Us Page", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("button");
        expect(heading).toBeInTheDocument();
    });
    
    // it and test are similar
    
    it("Should load 2 input boxes", () => {
        render(<Contact />);
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        // inputBoxes is react element which is an object, or react fiber node
    
    
        console.log("🚀 ~ test ~ inputBoxes:", inputBoxes.length)
        expect(inputBoxes.length).toBe(3);
    });
})


// We can wrap up all our test cases inside the describe
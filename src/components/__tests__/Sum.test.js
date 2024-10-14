import { Sum } from "../sum"

test("Test Sum function", ()=>{
    const result = Sum(4,5)
    
    //Assertion
    expect(result).toBe(9)
})
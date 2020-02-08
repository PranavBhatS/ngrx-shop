import { greet } from "./greet"

describe("greet",()=>{
    it("name included in output",()=>{
        expect(greet("pranav")).toContain("pranav")
    })
})



// 1. Measure 2. Add Data 3. My Outcomes 4. History
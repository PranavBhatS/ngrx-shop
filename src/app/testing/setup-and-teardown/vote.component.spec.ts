import { VoteComponent } from "./vote.component"


describe('VoteComponent', () => {
    //arrange
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent()
    })

    afterEach(() => {

    })

    beforeAll(() => { })
    afterAll(() => { })

    it("should increment total vote when upvoted", () => {
        //act
        component.upVote();
        //assert
        expect(component.totalVote).toBe(1);
    })

    it("should decrement total vote when downvote", () => {
        component.downVote();

        expect(component.totalVote).toBe(-1);
    })
})
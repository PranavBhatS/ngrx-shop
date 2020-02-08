


export class VoteComponent {
    totalVote = 0;
    upVote() {
        this.totalVote++;
    }

    downVote() {
        this.totalVote--;
    }
}
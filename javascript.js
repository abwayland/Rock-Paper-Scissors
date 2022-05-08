function computerPlay() {
    //create an array of strings [rock, paper, scissors]
    const strArr = ["rock", "paper", "scissors"];
    //pick random int between 0 and array length
    const index = Math.floor(Math.random() * 3);
    //return string at index of array
    return strArr[index];
}

console.log(computerPlay());
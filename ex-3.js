// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

//minScore = Math.min(...scores);

minScore = scores[0];
for (let number of scores) {
  if (number < minScore) {
    minScore = number;
  }
}

console.log(minScore);

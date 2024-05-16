// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = scores[0];
for (let point of scores) {
  if (point < minScore) {
    minScore = point;
  }
}

console.log(minScore);

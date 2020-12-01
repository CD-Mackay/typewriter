const sentence = "hello there from lighthouse labs";
let timer = 75;
const typeWriter = function(sentence) {
  sentence += "\n";
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 75;
  }
};
typeWriter(sentence);

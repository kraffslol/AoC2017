const fs = require("fs");

// Part 1

const part1 = () => {
  const data = fs.readFileSync("./input.txt", "utf8");

  let first = data[0];
  let last = data[data.length - 1];
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1]) {
      sum += parseInt(data[i]);
    }
  }

  if (first == last) {
    sum += parseInt(first);
  }

  console.log(sum);
};

part1();

const part2 = () => {
  const data = fs.readFileSync("./input.txt", "utf8");

  let sum = 0;
  let steps = data.length / 2;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + steps]) {
      sum += parseInt(data[i]) * 2;
    }
  }

  console.log(sum);
};

part2();

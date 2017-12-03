const fs = require("fs");
const readline = require("readline");

let checksum = 0;

const lineReader = readline.createInterface({
  input: fs.createReadStream("./input.txt")
});

lineReader.on("line", line => {
  const row = line.split("\t");
  const min = Math.min.apply(null, row);
  const max = Math.max.apply(null, row);
  checksum += max - min;
});

lineReader.on("close", () => console.log(checksum));

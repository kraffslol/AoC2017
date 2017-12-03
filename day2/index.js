const fs = require("fs");
const readline = require("readline");

// Part 1

const part1 = () => {
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

  lineReader.on("close", () => console.log("Part 1:", checksum));
};

part1();

// Part 2

const part2 = () => {
  let checksum = 0;

  const lineReader = readline.createInterface({
    input: fs.createReadStream("./input.txt")
  });

  lineReader.on("line", line => {
    const row = line.split("\t");

    row.forEach(number => {
      for (i = 0; i < row.length; i++) {
        const division = number / row[i];
        if (division !== 1 && division % 1 == 0) {
          checksum += division;
        }
      }
    });
  });

  lineReader.on("close", () => {
    console.log("Part 2:", checksum);
  });
};

part2();

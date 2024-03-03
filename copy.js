const { pipeline } = require("node:stream");
const fs = require("node:fs/promises");

(async () => {
  console.time("copy");

  const fileHandleRead = await fs.open("src.txt", "r");
  const fileHandleWrite = await fs.open("dest.txt", "w");

  const readStream = fileHandleRead.createReadStream();
  const writeStream = fileHandleWrite.createWriteStream();

  pipeline(readStream, writeStream, (err) => {
    if (err) {
      console.log(err);
    }
    console.timeEnd("copy");
  });
})();

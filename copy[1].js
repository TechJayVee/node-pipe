const fs = require("node:fs/promises");

(async () => {
  console.time("copy");

  const fileHandleRead = await fs.open("src.txt", "r");
  const fileHandleWrite = await fs.open("dest.txt", "w");

  const readStream = fileHandleRead.createReadStream();
  const writeStream = fileHandleWrite.createWriteStream();

  readStream.pipe(writeStream);

  readStream.on("end", () => {
    console.timeEnd("copy");
    console.log("Copy completed!");
  });
})();

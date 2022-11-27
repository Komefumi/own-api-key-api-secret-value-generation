const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

const clean = (input) => input.replace(/[^a-zA-Z0-9]/g, "");

const gen = async (input, rounds) => clean(await bcrypt.hash(input, rounds));

const run = async () => {
  try {
    const key = await gen("key_one", 14);
    const secret = await gen("secret_one", 14);

    const result = { key, secret };

    fs.writeFileSync("result.json", JSON.stringify(result, null, 2));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

run();

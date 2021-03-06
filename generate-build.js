/* eslint-disable */
const fs = require("fs");
const packageJson = require("./package.json");

const appVersion = packageJson.version;

const jsonData = {
  version: Math.random().toString(),
};

var jsonContent = JSON.stringify(jsonData);

fs.writeFile("./src/meta.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to meta.json");
    return console.log(err);
  }

  console.log(
    "meta.json file has been saved with latest version number",
    jsonContent
  );
});

/* eslint-enable */

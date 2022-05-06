async function hello() {
  const data = require("../backend/btc.json");
  const samFavoriteData = {};
  samFavoriteData.close = [];
  samFavoriteData.time = [];
  data.results.map((data) => {
    samFavoriteData.close.push(data.c);
    samFavoriteData.time.push(data.t);
    return data;
  });
  const jsonString = JSON.stringify(samFavoriteData);
  const fs = require("fs");
  fs.writeFile("samFavoriteData.json", jsonString, () => {
    return;
  });
}

hello();

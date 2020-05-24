// const express = require("express");

// const app = express();

// // server configuration
// const PORT = 8081;

// // create a route for the app
// app.get("/", (req, res) => {
//   res.json({

//   });
// });

// // make the server listen to requests
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}/`);
// });

const express = require("express");
const app = express();
const port = 8000;

const json = {
  data: [
    {
      name: "Test Whatsapp",
      region: "US",
      createdOn: 1559807714999,
      price: "Price info of Test Whatsapp",
      csv: "Some CSV link for Whatsapp",
      report: "Some report link for Whatsapp",
      image_url: "Some image url of the campaign"
    },
    {
      name: "Super Jewels Quest",
      region: "CA, FR",
      createdOn: 1559806715124,
      price: "Price info of Super Jewels Quest",
      csv: "Some CSV link for Super Jewels Quest",
      report: "Some report link for Super Jewels Ques",
      image_url: "Some image url of the campaign"
    },
    {
      name: "Mole Slayer",
      region: "FR",
      createdOn: 1559806711124,
      price: "Price info of Mole Slayer",
      csv: "Some CSV link for Mole Slayer",
      report: "Some report link for Mole Slayer",
      image_url: "Some image url of the campaign"
    },
    {
      name: "Mancala Mix",
      region: "JP",
      createdOn: 1559806680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "Some image url of the campaign"
    }
  ]
};
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.get("/", (req, res) => res.send(json));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

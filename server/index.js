const express = require("express");
const cors = require("cors");
//add controller
const controller = require("./controller")

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
//create get request

app.get("/api/compliment", controller.niceCompliment);
app.get("/api/furtune",controller.theFurtune);
app.get("/api/compliments", controller.compliments2)
app.get("/api/awesome",controller.awesomeOne)
app.delete("/api/fortune", controller.deleteInfo)



  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});








app.listen(4000, () => console.log("Server running on 4000"));

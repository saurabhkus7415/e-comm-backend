const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");
const app = express();
app.use(cors()); //for resolved using as a like  middleware
app.use(express.json());
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  // for added line to remove password
  // for added line to remove password
  result = result.toObject();
  delete result.password;
  resp.send(result);
});
app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "User not Found" });
    }
  } else {
    resp.send({ result: "email and password are required" });
  }
});

app.listen(3000);

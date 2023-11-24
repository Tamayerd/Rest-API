const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const DataModel = require("./models/data");
const cors = require("cors");
app.use(cors());


const PORT = process.env.PORT || 5000;

app.get("/api", function (req, res) {
  res.json({
    text: "my api!",
  });
});
app.post("/api/login", function (req, res) {
  const user = {
    username: "apitest",
    password: "test123",
  };
  const token = jwt.sign({ user }, "key");
  res.json({
    token: token,
  });
});




app.post("/api/data", async (req, res) => {
 try {
    const fetchedData = await DataModel.find();
  
    res.json({
      data: fetchedData,
      
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "key", function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: "this is protected",
        data: data,
      });
    }
  });
  res.json({
    text: "this is protected",
  });
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get("/api/fetchData", async (req, res) => {
  try {
    const token = await getToken();
    const response = await fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fieldData: {},
        script: "getData",
      }),
    });

    const db = await response.json();


    const scriptResult = JSON.parse(JSON.stringify(db.data[0].response.scriptResult));
console.log(scriptResult[0].key)
    res.json({
      scriptResult,
      
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function getToken() {
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await response.json();
    console.log(data);
    return data.token;
  } catch (error) {
    throw new Error(error.message);
  }
}

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

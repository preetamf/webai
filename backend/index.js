import express from "express";
import cors from "cors"


const app = express();
const port = 8000; 
app.use(cors())

//dummy api data
const data = {
  usage: [
    {
      host: null,
      datetime: "2023-09-15 09:27:00 UTC",
      requests: 0,
      traffic: 0,
      status: "error",
      message: "NO_HOST_CONNECTION",
      plan: "Residential Proxy/ Plan 1",
      cost: "00.01"
    },
    {
      host: "api.ipify.",
      datetime: "2023-09-15 09:27:00 UTC",
      requests: 1,
      traffic: 0,
      status: "success",
      message: null,
      plan: "Residential Proxy/ Plan 2",
      cost: "00.01"
    },
    {
      host: "google.com",
      datetime: "2023-09-15 09:25:00 UTC",
      requests: 1,
      traffic: "8.08 KB",
      message: null,
      plan: "Residential Proxy/ Plan 3",
      cost: "00.01"
    },
    {
      host: "api.ipify.org",
      datetime: "2023-09-15 09:25:00 UTC",
      requests: 3,
      traffic: "20.41 KB",
      message: null,
      plan: "Residential Proxy/ Plan 4",
      cost: "00.01"
    },
  ],
  total_count: 4,
};


//api end point for sub usage
app.get('/api/usage', (req, res) => {
  res.json(data);
});


app.get('/', (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Server listening on port : http://localhost:${port}`);
});

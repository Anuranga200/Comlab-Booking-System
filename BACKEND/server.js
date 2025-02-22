const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const path = require('path');
const PORT = process.env.PORT || 8070;
const URL = process.env.MONGODB_URL;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
  });
}


mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection success!');
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

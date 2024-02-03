const path = require('path');
const express = require("express");
const dotenv  = require("dotenv").config();
const mongoose = require("mongoose");
const session = require('express-session');
const cors = require("cors");
const cookieParser = require("cookie-parser");

//App Routes
const infectionRoutes = require('./routes/infectionRoutes');

const port = process.env.PORT || 5001;

const app = express();

const publicPath = path.join(__dirname, 'frontend', 'build');

app.use(express.static(publicPath));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(cors({
  origin: (origin, callback) => {
    if(origin === process.env.URL || !origin){
      callback(null, true)
    } else{
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // Explicitly set the status code for preflight success
}));

app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace with your secret key for session encryption
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } //oneDay max
  })
);

// const uri = "mongodb+srv://aleenhasnani:DUqqgA7LoCgp1Jgp@letsride.dt7jgdg.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// mongoose.connect(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

mongoose.connect(
    process.env.DB_URL + "retryWrites=true&w=majority" 
    // {
    //   strict: true,
    //  deprecationErrors: true,
    // }
  );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error: "));
db.once("open", function () {
  console.log("Connected successfully to the database");
});

//API Routes
app.use('/api/infection', infectionRoutes);
// app.use('/api/driverRegistration', driverRegistrationRoutes);
// app.use('/api/rating', ratingRoutes);
// app.use('/api/rideDetails', rideDetailsRoutes);
// app.use('/api/rideDistancePrice', rideDistancePriceRoutes);
// app.use('/api/sendEmail', sendEmailRoutes);
// app.use('/api/uploadFile', uploadFileRoutes);

app.get('/api/userSession', (req, res) => {
  const user = req.session.user; // Retrieve the user's details from the session
  res.json({message: 'session', user});
});

app.get('/api/profile-images', (req, res) => {
  //console.log(req);
  const imageName = req.query.image;
  const imagePath = path.join(__dirname, imageName);

  //console.log(imagePath);
  // Send the image file as a response
  res.sendFile(imagePath);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./src/config/db");
const cors = require("cors");
const UserRouter = require('./src/routes/userRoutes');
const User = require("./src/models/user"); // Import User model

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/', UserRouter);

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});

// Remove the redundant app.use(bodyParser.json())

app.post('/register', (req, res) => {
  const {  empid,name,email, role, password } = req.body;

  // Perform user registration logic (e.g., save to database)

  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/appraisalform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4 } = req.body;
  res.status(201).json({ message: 'Appraisal form submitted successfully' });
});
//for manager
app.post('/managerappraisalform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4,objective5, objective6, objective7, objective8 } = req.body;
  res.status(201).json({ message: 'Manager Appraisal form submitted successfully' });
});
// for devops
app.post('/devopsform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4,objective5, objective6 ,objective7, objective8,objective9, objective10  } = req.body;
  res.status(201).json({ message: 'Devops Appraisal form submitted successfully' });
});
//for clouds
app.post('/cloudtrainerform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4,objective5, objective6 ,objective7, objective8,objective9 } = req.body;
  res.status(201).json({ message: 'clouds Appraisal form submitted successfully' });
});
app.post('/networkadministratorform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4,objective5, objective6, objective7, objective8 } = req.body;
  res.status(201).json({ message: 'Nteworkadministrator Appraisal form submitted successfully' });
});
app.post('/teamleadform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4 } = req.body;
  res.status(201).json({ message: 'Teamlead Appraisal form submitted successfully' });
});
app.post('/supportteamform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4, objective5 } = req.body;
  res.status(201).json({ message: 'Supportteam Appraisal form submitted successfully' });
});
app.post('/pegaform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4,objective5, objective6 ,objective7, objective8,objective9, objective10  } = req.body;
  res.status(201).json({ message: 'pega Appraisal form submitted successfully' });
});
app.post('/developerform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4,objective5, objective6, objective7, objective8 } = req.body;
  res.status(201).json({ message: 'Developer Appraisal form submitted successfully' });
});
app.post('/operationteamform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4, objective5 } = req.body;
  res.status(201).json({ message: 'Operationteam Appraisal form submitted successfully' });
});
app.post('/trainerform', (req, res) => {
  const { userempid,username,userrole,objective1, objective2, objective3, objective4,objective5, objective6, objective7} = req.body;
  res.status(201).json({ message: 'Trainer Appraisal form submitted successfully' });
});
app.post('/login', async (req, res) => {
  const { empid, password } = req.body;

  try {
    const user = await User.findOne({ empid });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
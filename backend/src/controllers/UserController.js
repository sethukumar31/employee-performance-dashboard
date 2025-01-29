const User = require("../models/user");
const Objective = require("../models/objectivedata");
const objectivedata = require("../models/objectivedata");
const Managerdata = require("../models/managerdata");
const managerdata = require("../models/managerdata");
const Devopsdata = require("../models/devopsdata");
const devopsdata = require("../models/devopsdata");
const cloudsdata = require("../models/clouddata");
const networksdata = require("../models/networkdata");
const teamleadsdata = require("../models/teamleaddata");
const supportteam = require("../models/supportteam");
const pegadata = require("../models/pegadata");
const developerdata = require("../models/developerdata");
const operationteam = require("../models/operationteam");
const trainerdata=require("../models/trainerdata")
const addUser = async (req, res, next) => {
  try {
    const { empid,name, email, role, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      empid,
      name,
      email,
      role,
      password
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  const { empid, password } = req.body;

  try {
    const user = await User.findOne({ empid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password === user.password) {
      return res.status(200).json({ message: 'User login successful',user });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};

const createObjective = async (req, res) => {s
  try {
    const { username,userrole,objective1, objective2, objective3, objective4 } = req.body;
    const newObjective = new Objective({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4
    });
    const savedObjective = await newObjective.save();
    res.status(201).json(savedObjective);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const GetUserData = async (req, res, next) => {
  try {
    const users = await objectivedata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// to post the data
const createManager = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4 ,objective5, objective6, objective7, objective8} = req.body;
    const newManager = new Managerdata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      objective6,
      objective7,
      objective8
    });
    console.log(req.body);
    const savedManager = await newManager.save();
    res.status(201).json(savedManager);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// to get the data
const GetManagerData = async (req, res, next) => {
  try {
    const users = await managerdata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// to post the data
const createDevops = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4 ,objective5, objective6, objective7, objective8,objective9, objective10} = req.body;
    const newDevops = new Devopsdata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      objective6,
      objective7,
      objective8,
      objective9,
      objective10
    });
    console.log(req.body);
    const savedDevops = await newDevops.save();
    res.status(201).json(savedDevops);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// to get the data
const GetDevopsData = async (req, res, next) => {
  try {
    const users = await devopsdata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//for clouds data
const createClouds = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4 ,objective5, objective6, objective7, objective8,objective9} = req.body;
    const newClouds = new cloudsdata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      objective6,
      objective7,
      objective8,
      objective9
    });
    console.log(req.body);
    const savedClouds = await newClouds.save();
    res.status(201).json(savedClouds);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//to get clouds data
const GetCloudsData = async (req, res, next) => {
  try {
    const users = await cloudsdata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const createNetworks = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4 ,objective5, objective6, objective7, objective8} = req.body;
    const newNetworks = new networksdata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      objective6,
      objective7,
      objective8,
    });
    console.log(req.body);
    const savedNetworks = await newNetworks.save();
    res.status(201).json(savedNetworks);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//to get clouds data
const GetNetworksData = async (req, res, next) => {
  try {
    const users = await networksdata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const createTeamleads = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4} = req.body;
    const newTeamleads = new teamleadsdata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
    });
    console.log(req.body);
    const savedTeamleads = await newTeamleads.save();
    res.status(201).json(savedTeamleads);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//to get clouds data
const GetTeamleadsData = async (req, res, next) => {
  try {
    const users = await teamleadsdata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const createSupportteam = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4, objective5} = req.body;
    const newSupportteam = new supportteam({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
    });
    console.log(req.body);
    const savedSupportteam = await newSupportteam.save();
    res.status(201).json(savedSupportteam);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//to get clouds data
const GetSupportteamData = async (req, res, next) => {
  try {
    const users = await supportteam.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const createPegadata = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4, objective5,objective6, objective7, objective8, objective9, objective10} = req.body;
    const newPegadata = new pegadata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      objective6,
      objective7,
      objective8,
      objective9,
      objective10,
    });
    console.log(req.body);
    const savedPegadata = await newPegadata.save();
    res.status(201).json(savedPegadata);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//to get clouds data
const GetPegaData = async (req, res, next) => {
  try {
    const users = await pegadata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const createDeveloperdata = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4, objective5,objective6, objective7, objective8} = req.body;
    const newDeveloperdata = new developerdata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      objective6,
      objective7,
      objective8,
    });
    console.log(req.body);
    const savedDeveloperdata = await newDeveloperdata.save();
    res.status(201).json(savedDeveloperdata);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//to get clouds data
const GetDeveloperData = async (req, res, next) => {
  try {
    const users = await developerdata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const createOperationteam = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4, objective5} = req.body;
    const newOperationteam = new operationteam({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
    });
    console.log(req.body);
    const savedOperationteam = await newOperationteam.save();
    res.status(201).json(savedOperationteam);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//to get clouds data
const GetOperationteamData = async (req, res, next) => {
  try {
    const users = await operationteam.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// to post the data
const createTrainer = async (req, res) => {
  try {
    const { userempid,username,userrole,objective1, objective2, objective3, objective4 ,objective5, objective6, objective7} = req.body;
    const newTrainer = new trainerdata({
      userempid,
      username,
      userrole,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      objective6,
      objective7
    });
    console.log(req.body);
    const savedTrainer = await newTrainer.save();
    res.status(201).json(savedTrainer);
  } catch (error) {
    console.error('Error creating objective:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// to get the data
const GetTrainerData = async (req, res, next) => {
  try {
    const users = await trainerdata.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found." });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addUser,
  loginUser,
  createObjective,
  GetUserData,
  createManager ,
  GetManagerData,
  createDevops ,
  GetDevopsData,
  createClouds,
  GetCloudsData,
  createNetworks,
  GetNetworksData,
  createTeamleads,
  GetTeamleadsData,
  createSupportteam,
  GetSupportteamData,
  createPegadata,
  GetPegaData,
  createDeveloperdata,
  GetDeveloperData,
  createOperationteam,
  GetOperationteamData,
  GetTrainerData,
  createTrainer
};
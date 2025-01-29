const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/UserController');

// User Routes
Router.post('/register', UserController.addUser);
Router.post('/login', UserController.loginUser);
Router.post('/appraisalform', UserController.createObjective);
Router.post('/managers', UserController.createManager );
Router.post('/devopss', UserController.createDevops);
Router.get('/getobjectivess', UserController.GetUserData); // Change the route to /getusers
Router.get('/getmanagers', UserController.GetManagerData); //for manager
Router.get('/getdevopss', UserController.GetDevopsData); //for devops
Router.post('/clouds', UserController.createClouds);//for clouddata
Router.get('/getclouds', UserController.GetCloudsData);//to get clouddata
Router.post('/networks', UserController.createNetworks);//for networkdata
Router.get('/getnetworks', UserController.GetNetworksData);//to get networkdata
Router.post('/teamleads', UserController.createTeamleads);//for networkdata
Router.get('/getteamleads', UserController.GetTeamleadsData);//to get networkdata
Router.post('/supportteams', UserController.createSupportteam);
Router.get('/getsupportteams', UserController.GetSupportteamData);
Router.post('/pegas', UserController.createPegadata);
Router.get('/getpegas', UserController.GetPegaData);
Router.post('/developerdatas', UserController.createDeveloperdata);
Router.get('/getdeveloperdatas', UserController.GetDeveloperData);
Router.post('/operationteams', UserController.createOperationteam);
Router.get('/getoperationteams', UserController.GetOperationteamData);
Router.post('/trainerdatas', UserController.createTrainer);
Router.get('/gettrainerdatas', UserController.GetTrainerData );
module.exports = Router;
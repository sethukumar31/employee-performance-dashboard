//FILENAME : User.js

const mongoose = require("mongoose");
const validRoles = ['admin', 'manager','teamlead','developer','supportteam','trainer','operationteam','networkadministrator'];
const UserSchema = mongoose.Schema({
  empid: {
    unique: true,
    type: String,
    required: true
  },
   name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: validRoles 
  },
  password: {
    type: String,
    required: true
  },
},

{ 
  collection: 'users' 
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);

const mongoose = require("mongoose");
const CloudSchema = mongoose.Schema({
  userempid: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  userrole: {
    type: String,
    required: true
  },
  objective1: {
    type: String,
    required: true
  },
  objective2: {
    type: String,
    required: true
  },
  objective3: {
    type: String,
    required: true,
  },
  objective4: {
    type: String,
    required: true
  },
  objective5: {
    type: String,
    required: true
  },
  objective6: {
    type: String,
    required: true
  },
  objective7: {
    type: String,
    required: true
  },
  objective8: {
    type: String,
    required: true
  },
  objective9: {
    type: String,
    required: true
  },
},

{ 
  collection: 'clouds' 
});

// export model user with UserSchema
module.exports = mongoose.model("clouddata", CloudSchema);
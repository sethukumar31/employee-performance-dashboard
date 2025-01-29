
const mongoose = require("mongoose");
const operationteamchema = mongoose.Schema({
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
  }
},

{ 
  collection: 'operationteams' 
});

// export model user with UserSchema
module.exports = mongoose.model("operationteam", operationteamchema);
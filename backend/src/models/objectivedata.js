
const mongoose = require("mongoose");
const ObjectiveSchema = mongoose.Schema({
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
},

{ 
  collection: 'objectivess' 
});

// export model user with UserSchema
module.exports = mongoose.model("objectivedata", ObjectiveSchema);
jest.setTimeout(30000);

require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise; // Use node global Promise object
mongoose.connect(keys.mongoURI, { userMongoClient: true });


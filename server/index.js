require('@babel/register')({ cwd: __dirname });

// set variables in .env to node
require('dotenv').config();

// connect to database
require('./src/database');

require('./src/index');

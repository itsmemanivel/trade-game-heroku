var redis = require('redis');
var client = redis.createClient({

    host:  process.env.REDIS_HOST || '127.0.0.1'
    
});



module.exports = client;

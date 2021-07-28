const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
//     {
        
//     })
//     .then(() => console.log('connected to mongo'))
//     .catch((err) => console.log('failed to connect', err)); 


mongoose.connect(process.env.MONGODB_URL,
{
    
})
.then(() => console.log('connected to mongo'))
.catch((err) => console.log('failed to connect', err)); 

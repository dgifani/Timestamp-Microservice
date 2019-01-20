'use strict'

/* 
 * Add Express and cors 
*/
const express = require('express');
const cors = require('cors');
const port =   process.env.PORT || 3000;

const app = express();
app.use(cors({optionSuccessStatus: 200}));


app.get("/:date_string?", (req, res) => {

    //  Get params date_string if exist 
    const date = req.params.date_string;

    // By defualt set current date time in UTC and Unix
    let unix = new Date().getTime();
    let utc = new Date().toUTCString();

    // If the params available then proceed otherwise return current date time
    if(date){
        if(isNaN(date)){

            unix = new Date(date).getTime() ;
            utc = new Date(date).toUTCString();

        }else{

            unix = new Date(date * 1000).getTime();
            utc = new Date(date * 1000).toUTCString();
        }
    }

    // Check if the date is not valid return error 
    if(!unix  ||  utc == 'Invalid Date'){
        return res.status(400).json({"error" : "Invalid Date" })
    }

    res.json({ "unix" : unix , "utc": utc});

})


app.listen( port, () => console.log(`Server Listening on port: ${port}`))

module.exports = app;
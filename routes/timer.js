"use  strict"

const express = require('express');
const router = express.Router();
var countdown = require('countdown');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 24 * 60 })
const Record = require('../admin/models/records');

startTimer();


function startTimer() {
 
  timer();
}

 function timer() 
{
    var mins=3;
    var sec = mins*60;
    var timerInterv = setInterval(doCountDown, 1000);
    var outMins, outSecs
    
    function doCountDown() 
    {
      --sec;
      if(sec <=0){
          outMins=outSecs=0;
          clearInterval(timerInterv);
          updateTimer();
      }    
    
      outMins = parseInt(sec/60);
      outSecs = sec%60;
     
      cache.set("mins", outMins);
      cache.set("secs", outSecs);
      // console.log("Minutes: "+ outMins +"  Seconds: "+ outSecs);
      // console.log(Math.floor(Math.random() * 10));
      // res.json({ "minutes" : outMins , "seconds" : outSecs })
    }
    
}

function updateTimer() {
 
         startTimer();
}



// random number generator

setInterval(

  function addResult() {
      
  var mins = cache.get("mins");  
  var secs = cache.get("secs");  

  
  // console.log(mins +" : "+ secs);
  
 

  if(mins == '00' && secs == '30'){
  

    var randomNumber = Math.floor(Math.random() * 10);
    if((randomNumber == 1)||(randomNumber == 3)||(randomNumber == 5)||(randomNumber == 7)||(randomNumber == 9)){
      var result = "odd";
    }else{
       result = "even";
    }

   

    
    
    Record.getLatestrecord( (err, record) =>{

     
        var latestPeriod = record[0].period ;
                 
        // console.log(latestPeriod);
    

    let newRecord = new Record ({
  
      period: latestPeriod +1,
      number: randomNumber,
      result: result,
      createdtime: new Date().toISOString()
  });


  // console.log(newRecord);

  Record.addRecord(newRecord, (err, record) =>{

      if(err){
          console.log(err);
      }else{
          console.log(record)
      }
  })

});
  
  }
  }, 1000
  
  )



router.get('/get', (req, res, next) =>{

     
  var mins = cache.get("mins");  
  var secs = cache.get("secs");  
  // console.log("mins : " + mins+ " secs: "  +  secs);

  res.json({ mins : mins , secs  :  secs  });

});





module.exports = router;
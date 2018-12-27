var request = require('request');
request({
    url:'www.google.com',
    json:true
},(error,response,body)=>{
    console.log(JSON.stringify(body,undefined,2));
})
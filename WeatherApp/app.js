const request = require('request');
const yargs = require('yargs');
const argv = yargs
    .option({
        a :{
            demand : true,
            alias: 'address',
            descibe:'Address to fetch weather',
            string : true
        }
    })
    .help()
    .alias('help','h')
    .argv;
console.log(argv);
request({
    url:'https://www.google.com/',
    json: true
},(error,response,body)=>{
    //console.log(JSON.stringify(body,undefined,2));
    //console.log(response);
    
})
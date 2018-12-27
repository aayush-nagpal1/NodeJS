var getUser = (id,callback) =>{
    var user ={
        id:id,
        name:'Aayush'
    };
    callback(user);
};

getUser(21,(user)=>{
    console.log(user);
});
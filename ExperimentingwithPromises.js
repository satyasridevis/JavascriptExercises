const makeServerRequest = new Promise((resolve,reject) =>{
let responseFromServer = true;
if(responseFromServer){
    resolve("we got the data");
}
else{
    reject("data not received");
}
});
makeServerRequest.then(result => {console.log(result);});
makeServerRequest.catch(result => {console.log(result);});
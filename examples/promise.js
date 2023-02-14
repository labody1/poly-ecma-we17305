const promise=new Promise(function(resolve,reject) {
    const status=false;
    setTimeout(function() {
        if (status) {   
            resolve({
                code:200,
                result:"em da doi anh"
            })
        }else{
            const err=new Error("Vi anh chua giau")
            reject(err);
        }
    },2000)
})
console.log(promise);
//consumer
promise
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
})
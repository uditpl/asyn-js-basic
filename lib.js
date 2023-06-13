function updateAccount(product , cb){
    setTimeout(()=>{
        console.log(product+' purchased');
        cb()
        cb()
        cb()    
    }, 2000)
}

function promisesUpdateAccount(product){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
        })
    })
}

module.exports = {
    updateAccount : updateAccount,
    promisesUpdateAccount : promisesUpdateAccount
}
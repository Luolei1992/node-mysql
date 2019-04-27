const loginCheck = (username,password) =>{
    if(username == 'bingyuan' && password == '123456'){
        return true
    }else{
        return false
    }
}
module.exports = {
    loginCheck
}
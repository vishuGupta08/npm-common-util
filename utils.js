const jwt = require('jsonwebtoken');

const getValueforKey = (key, token) => {
    if(!key){
       return 'Key Not Found'
    }
    if(!token){
        return 'Token Not FOund'
    }
return jwt.decode(token)[key];
}

module.exports = {
    forKey: (key,token) => getValueforKey(key,token)
}
import jwt from 'jsonwebtoken';
const generateJwt = (userID) => {
    return jwt.sign({
        id:userID,
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}


export default generateJwt;
import User from "../models/users.js"
import generateId from "../helpers/generateID.js"

const register = async (req, res) => {
    const {email} = req.body;
    const userExist = await User.findOne({email})

    if (userExist){
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({msg: error.message})
     }

    try{
        const newUser = new User(req.body);
        newUser.token = generateId();
        const userSave = await newUser.save();
        console.log(req.body)
        res.json({userSave});
    }catch(err){
        console.log(err.msg);
    }
    
}

const authenticateUser = async (req, res) => {
    
}

export {authenticateUser, register}
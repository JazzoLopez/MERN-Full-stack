import User from "../models/users.js"
import generateId from "../helpers/generateID.js"
import generateJwt from "../helpers/generateJwt.js";

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
        console.log(req.body)
        console.log(err.msg);
    }
    
}

const authenticateUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        const error = new Error('Usuario no registrado');
        return res.status(400).json({msg: error.message})
    }

    if(!user.confirmed){
        const error = new Error('Usuario no confirmado');
        return res.status(400).json({msg: error.message})
    }

    const matchPassword = await user.matchPassword(password);
    if(!matchPassword){
        const error = new Error('Contraseña incorrecta');
        return res.status(400).json({msg: error.message})
    } else {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJwt(user._id)
        })
    }
}

export {authenticateUser, register}
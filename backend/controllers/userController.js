import User from "../models/users.js"

const users = (req, res) => {
    res.json({msg:'Desde api/usuarios'})
}

const register = async (req, res) => {
    try{
        const newUser = new User(req.body);
        const userSave = await  newUser.save();
        console.log(req.body)
        res.json({userSave})
    }catch(err){
        console.log(err.msg)
    }
    
}

export {users, register}
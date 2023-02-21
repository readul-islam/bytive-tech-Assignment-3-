const { ObjectId } = require("mongodb");
const usersModel = require("../models/users.model");

exports.createUser = async (req,res)=>{
    try {
        const createUser = await usersModel.create(req.body)
        res.status(200).json(createUser)
    } catch (error) {
        res.status(500).json({message: error.message,type:error.name});
    }
}
exports.getAllUser = async (req,res)=>{
    try {
        const allUser = await usersModel.find({})
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({message: error.message,type:error.name});
    }
}
exports.dropUser = async (req,res)=>{
    const {id} = req.query;
    console.log(id,req.query)
    try {
        const deleteUser = await usersModel.deleteOne({_id:new ObjectId(id)})
        res.status(200).json(deleteUser)
    } catch (error) {
        res.status(500).json({message: error.message,type:error.name});
    }
}
exports.updateUser = async (req,res)=>{
    const {id,updateInfo} = req.body;
    console.log(id,req.query)
    try {
        const updateUser = await usersModel.findByIdAndUpdate(id, { $set: updateInfo})
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({message: error.message,type:error.name});
    }
}
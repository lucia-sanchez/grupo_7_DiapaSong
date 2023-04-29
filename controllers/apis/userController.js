const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs')
const {getAllUsers, getUserById} = require('../../services/userServices');
const createResponseError = require("../../helpers/createResponseError");

module.exports = {
    list: async (req,res) =>{
        
    try{ 
        const {count, users} =await getAllUsers(req)
        return res.status(200).json({
        ok: true,            
        data :{count, users},
        meta : {
            status: 200,
            total : users.length,
            url : '/api/users'
        },
    })

    }catch (error) {
        console.log(error)
        return createResponseError(res, error)
       }
},
userDetail : async (req,res) =>{
    try{
        const user = await getUserById(req.params.id,req)

        if(!user){
            throw {
                status : 404,
                message : "Ususrio no encontrado"
            }
        }
        return res.status(200).json({
            ok:true,
            data: user,
            meta : {
                status: 200,
                total : 1,
                url : `/api/users/${req.params.id}`
            },
        })

    }catch(error){
        console.log(error)
        return createResponseError(res, error)
    }
}
}
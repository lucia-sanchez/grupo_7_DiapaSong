const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs')
const {getAllUsers, getUserById} = require('../../services/userServices');

module.exports = {
    list: async (req,res) =>{
        
    try{
        const users =await getAllUsers(req)
        return res.status(200).json({
        ok: true,            
        data : users,
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

    }catch(error){
        console.log(error)
        return createResponseError(res, error)
    }
}
}
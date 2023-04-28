const db = require("../database/models");
const literalQueryUrlImage = require('../helpers/literalQueryUrlImage')
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');
const createResponseError = require("../helpers/createResponseError");


module.exports ={
    getAllUsers : async (req)=>{
        try{
            const users = await db.User.findAll({
                atributes:{
                    excluide: ['password', 'creadedAt', 'UpdatedAt'],
                    incluide:[
                        'id', 'name', 'profileImage', 'email', 'password', 'identifyId', 'birthdate', 'phone', 'news', 'rolId'
                    ]
                }
            })

            return users
        }catch(error){
            return createResponseError()    
            }
        },

        getUserById: async () =>{
            try{

            }catch(error){
                return createResponseError(error)
            }
        }
    }






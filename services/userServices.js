const db = require("../database/models");
const literalQueryUrlImage = require('../helpers/literalQueryUrlImage')
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');
const createResponseError = require("../helpers/createResponseError");


module.exports ={
    getAllUsers : async (req)=>{
        try{
            let {count, rows: users} = await db.User.findAndCountAll({
                    include : [
                        {
                            association : 'genre',
                            attributes : ['genreId']
                        },
                        {
                            association : 'instrument',
                            attributes : ['instrumentId']
                        }    
                    ],
                    attributes :{
                    include: ['id', 'name', 'profileImage', 'email', 'password', 'identifyId', 'birthdate', 'phone', 'news', 'rolId',literalQueryUrlImage(req,'users','profileImage', 'urlImage')], 
                    exclude :['passord','createdAt','updatedAt']
                    }
                })

            return {
                count,
                users
            }
        }catch(error){
            return createResponseError()    
            }
        },

        getUserById: async (id) =>{
            try{
                let user = db.User.findByPk(id,{
                    attributes : ['id', 'name', 'profileImage', 'email', 'password', 'identifyId', 'birthdate', 'phone', 'news', 'rolId'],
                    include : [
                        {
                            association : 'genre',
                            attributes : ['genreId']
                        },
                        {
                            association : 'instrument',
                            attributes : ['instrumentId']
                        }
                    ],
                    exclude :[     
                           'passord','createdAt','updatedAt'    
                    ]
        
                })
                return user
            }catch(error){
                return createResponseError()
            }
        }
    }






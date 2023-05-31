const db = require("../database/models");
const literalQueryUrlImage = require('../helpers/literalQueryUrlImage')
const createResponseErrors = require("../helpers/createResponseErrors");


module.exports = {
    getAllUsers: async (req, limit, offset) => {
        try {
            let { count, rows: users } = await db.User.findAndCountAll({

                attributes: {
                    include: ['id', 'name', 'email', literalQueryUrlImage(req, 'users', 'profileImage', 'urlImage')],
                    exclude: ['password', 'createdAt', 'updatedAt', 'identifyId', 'birthdate', 'phone', 'news', 'rolId', 'profileImage']
                },
                limit,
                offset,
            })

            return {
                count,
                users
            }
        } catch (error) {
            return createResponseErrors()
        }
    },

    getUserById: async (id) => {
        try {
            let user = db.User.findByPk(id, {
                attributes: ['id', 'name', 'profileImage', 'email', 'identifyId', 'birthdate', 'phone', 'news', 'rolId'],
                include: [
                    {
                        association: 'genre',
                        attributes: ['genreId']
                    },
                    {
                        association: 'instrument',
                        attributes: ['instrumentId']
                    }
                ],
                exclude: [
                    'password', 'createdAt', 'updatedAt'
                ]

            })
            return user
        } catch (error) {
            return createResponseErrors()
        }
    },
    verifyUserByEmail: async (email) => {
        try {

            let user = await db.User.findOne({
                where: {
                    email
                }
            })

            return user ? true : false

        } catch (error) {
            console.log(error);
            return createResponseErrors()
        }
    },
  getCountUsers : async () => {
    try {

      const totalUsers = await db.User.count();

      return totalUsers
      
    } catch (error) {
      console.log(error);
      throw {
        status: 500,
        message: error.message,
      };
    }
  }
}






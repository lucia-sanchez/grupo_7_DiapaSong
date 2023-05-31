const db = require("../database/models");

module.exports = {
    getAllCategories : async () => {
        try {
            const categories = await db.Category.findAll({
                include : ['products']
            })
            return {
                count : categories.length,
                categories,
              };
        } catch (error) {
            throw {
                status: 500,
                message: error.message,
              };
        }
    }
}
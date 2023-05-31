const db = require("../database/models");

module.exports = {
    getAllColors : async () => {
        try {
            const colors = await db.Color.findAll()
            return colors
        
        } catch (error) {
            throw {
                status: 500,
                message: error.message,
              };
        }
    }
}
const { getAllColors } = require("../../services/colorsServices");
const { getCountProducts } = require("../../services/productsServices");
const { getCountUsers } = require("../../services/userServices");

module.exports = {
  metrics: async (req, res) => {
    try {

        const totalProducts = await getCountProducts();
        const totalUsers = await getCountUsers();
        
        return res.status(200).json({
            ok : true,
            data : {
                totalProducts,
                totalUsers
            }
        })

    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        error: {
          status: error.status || 500,
          message: error.message || "Upss, hubo un error",
        },
      });
    }
  },
  getColors : async (req,res) => {
    try {

      const colors = await getAllColors();
            
      return res.status(200).json({
          ok : true,
          data : {
              colors
          }
      })

  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      error: {
        status: error.status || 500,
        message: error.message || "Upss, hubo un error",
      },
    });
  }
  }
};

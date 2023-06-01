const { getAllCategories } = require("../../services/categoriesServices");

module.exports = {
  index: async (req, res) => {
    try {
      const { categories, count } = await getAllCategories();
      return res.status(200).json({
        ok : true,
        data : {
            count,
            categories
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
};

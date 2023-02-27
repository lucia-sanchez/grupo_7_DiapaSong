const multer = require('multer');
const path = require('path');

const storageProductsImage = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null, 'public/img/productos')
    },
    filename: function (req,file,callback) {
        callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const uploadProductsImage = multer({
    storage: storageProductsImage
});

module.exports = {
    uploadProductsImage
}
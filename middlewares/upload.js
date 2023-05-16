const multer = require('multer');
const path = require('path');

const storageProductsImage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public/img/productos')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});
const configUploadProductsImage = multer({
    storage: storageProductsImage,
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            req.fileValidationError = "Solo se permite imágenes";
            return cb(null, false, req.fileValidationError);
        }

        cb(null, true);
    },
}).fields([{ name: "images", maxCount: 3 }, { name: "mainImage", maxCount: 1 }]);

const uploadProductsImage = (req, res, next) => {
    const upload = configUploadProductsImage;

    upload(req, res, function (error) {
        if (error) {
            req.fileValidationError = "No más de 3 imágenes";
        } else {
            const images = req.files["images"];

            if (images && images.length > 3) {
                req.fileValidationError = "No más de 3 imágenes adicionales";
            }
        }
        next();
    });
};

const storageUserImage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public/img/users')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_user_${path.extname(file.originalname)}`)
    }
});
const configUploadUsersImage = multer({
    storage: storageUserImage,
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            req.fileValidationError = "Solo se permite imágenes .jpg .jpeg .png .gif o .webp";
            return cb(null, false, req.fileValidationError);
        }

        cb(null, true);
    },
}).fields([{ name: "mainImage", maxCount: 1 }]);

const uploadUserImage = (req, res, next) => {
    const upload = configUploadUsersImage;

    upload(req, res, function (error) {
        if (error) {
            req.fileValidationError = "No más de 1 imágen";
        } /* else {
            const images = req.files["images"];
            
            if (images && images.length > 3) {
              req.fileValidationError = "No más de 3 imágenes adicionales";
            }
          } */
        next();
    });
};

module.exports = {
    uploadProductsImage,
    uploadUserImage
}
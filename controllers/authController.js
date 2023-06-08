const db = require("../database/models")

module.exports = {
    loginGoogle: async (req,res)=>{
        const { provider,
            _json: {sub:googleId, name, picture},
        } = req.session.passport.user; 
        
        try{
            const related = []
        const [{id, rolId}] = await db.User.findOrCreate({
            where:{
                socialId: googleId
            },
            defaults:{
                name,
                profileImage: picture,
                socialId: googleId,
                socialProvider: provider,
               related
            },
        });

        req.session.userLogin = {
            id,
            name,
            rol: rolId,
            socialId: googleId,
            related
            
            
        };
        res.cookie('userDiapasong', req.session.userLogin, { maxAge: 10000 * 60 })

        res.redirect('/')
    }catch(error){
        console.log(error)
    } 
},
};

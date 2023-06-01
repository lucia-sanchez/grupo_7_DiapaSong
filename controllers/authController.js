

module.exports = {
    loginGoogle: (req,res)=>{
        const { provider,
            _json: {sub:id, given_name:name, family_name:surname, picture},
        } = req.session.passport.user  
        
        db.User.findOrCreate({
            where:{

            },
            defaults:{
                
            }
        })
    }
}
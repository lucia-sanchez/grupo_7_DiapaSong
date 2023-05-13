const {getAllUsers, getUserById, verifyUserByEmail} = require('../../services/userServices');
const createResponseErrors = require('../../helpers/createResponseErrors');

module.exports = {
    list: async (req,res) =>{
        //cambiar el limite para probar
        const limit = 10;
        const page = parseInt(req.query.page)?parseInt(req.query.page):1;
        //const {count} = await getAllUsers()
        if (req.query.page && isNaN(req.query.page) || req.query.page == 0 /* < 1 || page > count / limit */) {
        return res.status(400).json({ status:400,
            message: 'La página que buscas no existe, la consulta de pagina debe ser un numero mayor que 0' 
        });
  }
    try{ 
        const {count, users} =await getAllUsers(req,limit,(page-1)*limit)
        //Math.ceil(count / limit) lo uso para redondear el numero siguiente en la division de cantidad (count) y el limite (limit) de registros que quiero mostrar por pagina, lo tuve que usar para que me muestre la ultima pagina si queda un resto mayor que 0 y menor al limite y si no hay mas no la muestra
        const nextPageUrl = count < limit || /* page+1 > count/limit || */ page >= Math.ceil(count / limit) ? null : `http://localhost:3000/api/users?page=${page + 1}`;
        const prevPageUrl = page === 1 ? null : `http://localhost:3000/api/users?page=${page - 1}`;
        if(req.query.page!=1 && page> Math.ceil(count / limit)  /* count/limit || req.query.page == 0 */){
            return res.status(400).json({ status:400,
                message: 'La página que buscas no existe' 
             });}
        return res.status(200).json({
        ok: true, 
        next : nextPageUrl,
        previous: prevPageUrl,           
        data :{count,
            
             users},
        meta : {
            status: 200,
            total : users.length,
            url : '/api/users'
        },
    })

    }catch (error) {
        console.log(error)
        return createResponseErrors(res, error)
       }
},
userDetail : async (req,res) =>{
    try{
        const user = await getUserById(req.params.id,req)

        if(!user){
            throw {
                status : 404,
                message : "Ususrio no encontrado"
            }
        }
        return res.status(200).json({
            ok:true,
            data: user,
            meta : {
                status: 200,
                total : 1,
                url : `/api/users/${req.params.id}`
            },
        })

    }catch(error){
        return createResponseErrors(res, error)
    }
},
    verifyEmail : async (req,res)=>{
        try{
            let existUser = await verifyUserByEmail(req.body.email)

            return res.status(200).json({
                ok:true,
                data: {
                    existUser
                }
               
            })

        }catch(error){
            return createResponseErrors(res, error)
        }
    }

}
const {connection}=require('../configurationDatabase/config')

module.exports={
    deletevideos:((req,res)=>{
        const query=`delete from videos where id=${req.params.id}`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send(result)
        })
    })
}
const {connection}=require("../configurationDatabase/config")
module.exports={
    postvideos:((req,res)=>{
        console.log(req.body)
        const query=`insert into videos(name,duration,poster)values("${req.body.name}","${req.body.duration}","${req.body.poster}")`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send("post has been created")
        })
    })
}
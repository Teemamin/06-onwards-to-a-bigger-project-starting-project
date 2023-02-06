import { MongoClient } from "mongodb"
import { MONGOURI } from "../../env"

const handler = async (req,res)=>{
    if(req.method === 'POST'){
        const data = req.body
        const {title,image,address,description} = data
        console.log(data)

       const clinet = await MongoClient.connect(MONGOURI)
       const db = clinet.db() 
       const meetupsCollection = db.collection('meetups')
       const result = await meetupsCollection.insertOne(data)
       console.log(result)
       clinet.close()

       res.status(201).json({message: 'meetup inserted successfully'})
    }
    

}

export default handler
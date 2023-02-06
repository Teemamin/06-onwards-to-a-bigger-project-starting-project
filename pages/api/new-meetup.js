import { MongoClient } from "mongodb"

const handler = async (req,res)=>{
    if(req.method === 'POST'){
        const data = req.body
        const {title,image,address,description} = data
        console.log(data)

       const clinet = await MongoClient.connect('mongodb+srv://suri:suri@myfirstcluster.qycng.mongodb.net/meetups?retryWrites=true&w=majority')
       const db = clinet.db() 
       const meetupsCollection = db.collection('meetups')
       const result = await meetupsCollection.insertOne(data)
       console.log(result)
       clinet.close()

       res.status(201).json({message: 'meetup inserted successfully'})
    }
    

}

export default handler
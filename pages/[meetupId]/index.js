import React from 'react'
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';


const MeetupDetails = (props) => {
    // const router = useRouter()
  
  return (
    <>
    <Head>
      <title>{props.meetup.title}</title>
      <meta name='description' content={props.meetup.description}/>
    </Head>
      <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
    </>
  )
}

export default MeetupDetails

export async function getStaticPaths(){
  const client = await MongoClient.connect('mongodb+srv://suri:suri@myfirstcluster.qycng.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db() 
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({},{_id:1}).toArray() //find all object and return only the id fields

    client.close()
  return{
    fallback: 'blocking',
    paths: meetups.map(meetup=>({params:{meetupId: meetup._id.toString()}}))
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId
  const client = await MongoClient.connect('mongodb+srv://suri:suri@myfirstcluster.qycng.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db() 
  const meetupsCollection = db.collection('meetups')
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  // console.log(meetup)

  client.close()

    return {
        props: {
            meetup: {
              id: meetup._id.toString(),
              title: meetup.title,
              address: meetup.address,
              image: meetup.image,
              description: meetup.description
            }
        },
    }
}
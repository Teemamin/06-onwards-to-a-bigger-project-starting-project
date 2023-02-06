import MeatupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb';
import Head from 'next/head';


const HomePage = (props) => {
  return (
    <>
    <Head>
      <title>React Meeetup</title>
      <meta name='description' content='A highly reactive app build with react and nextJS'/>
    </Head>
    <MeatupList meetups={props.meetups}/>
    </>
  )
}

// export async function getServerSideProps(){
//     //fetch data from an API, here you can run serverside code,
//    //alternative to getStaticProps
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps(){
  //getStaticprops gets called by nextjs first before your component function 
    //fetch data from an API, here you can run serverside code,
    //d code here wont be in the client browser
    //Next.js will pre-render this page at build time using the props returned by getStaticProps.
    //nextjs will wait for this to run to finsh firdt before calling your component
    const client = await MongoClient.connect('mongodb+srv://suri:suri@myfirstcluster.qycng.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db() 
    const meetupsCollection = db.collection('meetups')
    const data = await meetupsCollection.find().toArray()
    client.close()
    return {
        props: {
            meetups: data.map(meetup=>{
              return {title: meetup.title,
                 address: meetup.address,
                 image: meetup.image, 
                 id: meetup._id.toString()}
            })
        },
          revalidate: 20,
    }
}

export default HomePage
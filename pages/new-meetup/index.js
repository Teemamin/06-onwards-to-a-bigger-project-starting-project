import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'


const NewMeetUp = () => {
  const router = useRouter()

    const addMetuphandler = async (meetupData)=>{
        const response = await fetch('/api/new-meetup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(meetupData),
        })
      const data = await response.json()
      console.log(data)

      router.push('/')

    }
  return (
        <>
          <Head>
            <title>New Meeetup</title>
            <meta name='description' content='A highly reactive app build with react and nextJS'/>
          </Head>
          <NewMeetupForm onAddMeetup={addMetuphandler}/>
        </>
  )
}

export default NewMeetUp
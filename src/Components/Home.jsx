import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Client,Databases } from 'appwrite'
function Home() {
  const client=new Client()
  const databases = new Databases(client);
  const [tweet,setTweet]=useState([])
client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('645f5e9b87c31ce1a65a');
useEffect(()=>{
  const promise = databases.listDocuments('6520548872bdf307f678', '652054ac7bfb7c6bbc8d');

promise.then(function (response) {
    console.log(response); // Success
    setTweet(response.documents)
}, function (error) {
    console.log(error); // Failure
});
},[])
 
  return (
    <div className='Home'>
    <h1>Home</h1>
    <Link to='/login'>Login{" "}</Link>
    <Link to='/signup'>Register</Link>

    <h1>Tweets</h1>
    {
      tweet?.map(tweet=>(
        <>
        <p>{tweet.tweetContent}</p>
        <p>created at: {tweet?.$createdAt}</p>
        </>
      ))
    }
    </div>
  )
}

export default Home
import React, { useState , useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setposts] = useState([
        {
            _id : 1,
            image : 'https://images.unsplash.com/photo-1778402620479-64bb441d5826?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption : 'This is a sample post'
        }
    ])

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            setposts(res.data.posts)
        })
    },[])

  return (
    <section class="feed-section">
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div class="post-card" key={post._id}>
                        <img src={post.image} alt="Post Image" />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )
        }

    </section>
  )
}

export default Feed

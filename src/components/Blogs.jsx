import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post';

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    }, []);

  return (
    <div>
        <h1 className='mt-10 text-5xl text-center font-semibold mb-10'>Blog Post</h1>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        )}
    </div>
  );
}

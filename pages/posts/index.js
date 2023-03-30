import React from 'react';
import Post from '../components/Post/Post';

const Posts = ({ posts }) => {
    return (
        <div>
            <h1>This is Post Page</h1>
            <h1>Number of Post Length {posts.length}</h1>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await res.json();
    console.log(posts)
    return {
        props: {
            posts
        }
    }
}
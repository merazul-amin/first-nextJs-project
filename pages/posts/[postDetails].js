import { useRouter } from 'next/router';
import React from 'react';
const PostDetails = ({ post }) => {
    const router = useRouter();
    const handleBack = () => {
        router.push('/posts')
    }
    return (
        <div>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h1 onClick={handleBack}> Back</h1>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postDetails}`);
    const post = await res.json();
    return {
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map(post => {
        return {
            params: {
                postDetails: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default PostDetails;
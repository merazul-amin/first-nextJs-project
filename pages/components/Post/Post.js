import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 mt-5 bg-slate-400 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <h2 className="card-title">{post.id}</h2>
                    <div className="card-actions justify-end">
                        <Link href={`/posts/${post?.id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
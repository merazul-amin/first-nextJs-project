import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const blogId = () => {
    const router = useRouter();
    const id = router.query.blogId;
    console.log(router);

    return (
        <div>
            <Head>
                <title>Blog Page{id}</title>
            </Head>
            <h1>This is a dynamic page of {id}</h1>
        </div>
    );
};

export default blogId;
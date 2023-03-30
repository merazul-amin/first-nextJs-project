import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h1>Blog Page</h1>
            <Link href={'/blog/blog1'}>Blog Page 1</Link>
        </div>
    );
};

export default index;
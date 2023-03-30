import { useRouter } from 'next/router';
import React from 'react';

const blogId = () => {
    const router = useRouter();
    const id = router.query.blogId;
    console.log(router);

    return (
        <div>
            <h1>This is a dynamic page of {id}</h1>
        </div>
    );
};

export default blogId;
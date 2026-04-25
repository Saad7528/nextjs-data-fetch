import React from 'react';


// const getPosts = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }

// const getPosts = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();
//     }
//     catch(err){
//         throw new Error('Failed to fetch posts')
//     }
    
// }


const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error('Failed to fetch posts')
    }
    return res.json();
}



const PostPage = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await getPosts();

    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                posts.map(post =>
                    <div className='border-2 border-b-blue-500 p-4' key={post.id}>
                        <h1>{post.title}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default PostPage;
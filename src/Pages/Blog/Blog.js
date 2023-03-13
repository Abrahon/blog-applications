import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import BlogCard from './BlogCard';

const Blog = () => {

    const [blogs, setBlogs,] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json()
                .then(data => setBlogs(data)))
    }, [])

    const handleDelete = id => {

        const agree = window.confirm('Are you sure want to cancel this review');
        console.log(agree);
        // console.log('deleting user', id)

        if (agree) {
            fetch(`http://localhost:5000/blogs/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully')
                    const remaining = blogs.filter(blg => blg._id !== id);
                    setBlogs(remaining);
                }
            })
        }
    }



        return (

            <div className=''>
                <h1 className="text-3xl text-center font-bold mt-5">My Blog Post</h1>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 m-20 mr-20'>
                    {
                        blogs.map(blog => <BlogCard
                            key={blog._id}
                            blog={blog}
                            handleDelete={handleDelete}
                            // handleStatusUpdate={handleStatusUpdate}
                        ></BlogCard>)
                    }

                </div>

            </div>

        );
    };

    export default Blog;
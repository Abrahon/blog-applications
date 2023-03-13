import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditBlog = () => {
    const [editBlog, setEditBlog] = useState([])
    
    const {id} = useParams('');
    console.log(id);
    return (
        <div className='m-6'>
        <h3 className="text-3xl font-semibold">Add Blog</h3>
        <form onSubmit="">
            <div className="form-control w-full max-w-xs mt-4">
                <label className="label" htmlFor='title'>
                    Add Blog Title
                </label>
                <input
                    type="text"
                    name="title"
                    placeholder="Type Blog Title"
                    className="input input-bordered input-warning w-full max-w-xs"
                    required
                />
            </div>

            <div className="form-control w-full max-w-xs mt-2">
                <label className="label" htmlFor='details'>
                    Add Blog Details
                </label>
                <textarea
                    name="details"
                    placeholder="Type Blog Details"
                    className="input input-bordered input-warning w-full max-w-xs h-28"
                    required
                />
            </div>

            {/* <div className="form-control w-full max-w-xs mt-2">
                <label className="label" htmlFor='image'>
                    Choose Blog Image
                </label>
                <input type="file"
                    name="image"
                    className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                    required />
            </div> */}

            <button className="btn btn-warning w-full max-w-xs block mt-6" type="submit">Add Post</button>
        </form>
    </div>
    );
};

export default EditBlog;
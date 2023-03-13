import { FactorId } from 'firebase/auth';
import React from 'react';
import { FcEditImage, FcVideoFile } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, handleDelete,handleStatusUpdate }) => {
    const { _id, img, title, details,status } = blog;
    return (
        <div>
            <div className="card card-compact ">
                <figure>
                    <img className='' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0, 300)}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm">
                            {/* <FcVideoFile></FcVideoFile> */}
                            delete
                        </button>
                        <Link to={`/editblog/${_id}`}>
                            <button
                                onClick={() => handleStatusUpdate(_id)}
                                className="btn btn-sm">{status ? details : 'edit blog'}

                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
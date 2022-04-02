import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { AllContext } from '../App/App';
import "./Home.css"
import Union from "../../img/Union.svg";

const Home = () => {

    const {blogs} = useContext(AllContext);

    const navigate = useNavigate();

    console.log(blogs);

    const blog = blogs.map((blog, index) => {
        return (
                <div className="container d-flex flex-column flex-lg-row  align-items-center p-4 blog-card " key={blog._id}>
                    <div className="blog-card-img p-2">
                        <img className="img-fluid" src={blog.imageURL} alt="blog-img" />
                    </div>
                    <div className="py-5 ps-0 ps-lg-5 blog-card-content">
                        <h4>{blog.title}</h4>
                        <h5 >
                            <img className="mb-3" src={Union} alt="logo" />
                            <span className="ms-1">Posted By {blog.admin}</span>
                        </h5>
                        <p>{blog.blog.slice(0, 400)} .......</p>
                        <span onClick={() => navigate(`/blogs/${blog._id}`)} className="read-more" to={`/blogs/${blog._id}`}>Read More</span>
                    </div>
                </div>
            )
        }
    )

    return (
        <div className="home">
            <div className="pt-5">
                {blog}
            </div>
        </div>
    );
};

export default Home;
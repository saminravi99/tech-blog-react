import React from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import "./BlogDetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const BlogDetail = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    

    const [blog, setBlog] = React.useState({});
    console.log(blog);

    React.useEffect(() => {
        fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
            .then(response => response.json())
            .then(json => setBlog(json))
            .catch(error => console.log(error));
    }, [id])
    return (
        <div>
            <div className="img-container">
                <div onClick={() => navigate(-1)} className="p-3 back-btn ">
                    <FontAwesomeIcon icon={faChevronLeft } className="arrow-icon" />
                    <span className="ms-1 back-btn-text">Back</span>
                </div>
                <div className="detail-img-container">
                    <img className=" img-fluid " src={blog.imageURL} alt={blog.title} />
                </div>
            </div>
            <div className="detail-text-container">
                <h3 className="px-lg-0 px-3">{blog.title}</h3>
                <div className="container mx-auto px-3 px-lg-5 mt-lg-5 mt-2 detail-paragraph">
                    <p>{blog.blog}</p>
                </div>
            </div>

            
        </div>
    );
};

export default BlogDetail;
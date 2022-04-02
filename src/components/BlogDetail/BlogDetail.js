import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import "./BlogDetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { AllContext } from '../App/App';

const BlogDetail = () => {


    const navigate = useNavigate();

    const {blogDetail} = useContext(AllContext);

    return (
        <div>
            <div className="img-container">
                <div onClick={() => navigate(-2)} className="p-3 back-btn ">
                    <FontAwesomeIcon icon={faChevronLeft } className="arrow-icon" />
                    <span className="ms-1 back-btn-text">Back</span>
                </div>
                <div className="detail-img-container">
                    <img className=" img-fluid " src={blogDetail.imageURL} alt={blogDetail.title} />
                </div>
            </div>
            <div className="detail-text-container">
                <h3 className="px-lg-0 px-3">{blogDetail.title}</h3>
                <div className="container mx-auto px-3 px-lg-5 mt-lg-5 mt-2 detail-paragraph">
                    <p>{blogDetail.blog}</p>
                </div>
            </div>

            
        </div>
    );
};

export default BlogDetail;
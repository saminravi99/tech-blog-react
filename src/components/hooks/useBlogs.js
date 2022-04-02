import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://retro-tech-talks.herokuapp.com/blogs')
            .then(response => response.json())
            .then(json => setBlogs(json))
            .catch(error => console.log(error));
    }
    , [])
    
    return blogs;
};

export default useBlogs;
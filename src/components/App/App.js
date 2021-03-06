import './App.css';
import React, { createContext, useEffect} from 'react';
import Header from '../Header/Header';
import { Route, Routes} from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';
import Home from '../Home/Home';
import BlogDetail from '../BlogDetail/BlogDetail';
import Videos from '../Videos/Videos';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

export const AllContext = createContext();

function App() {

  const [blogId, setBlogId] = React.useState('');

  const [blogDetail, setBlogDetail] = React.useState({});

  const [boolean, setBoolean] = React.useState(false);

  const [retriveBlog] = React.useState(localStorage.getItem('blogId'));

  const blogs = useBlogs();


  useEffect(() => {
   if(blogId){

      setBoolean(true);

      fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${blogId}`)
      .then(response => response.json())
      .then(json => {
        setBoolean(false);
        setBlogDetail(json)

      })
   }
  }
  , [blogId])
  
  useEffect(() => {
    if( retriveBlog ){
      
      setBoolean(true);

      fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${retriveBlog}`)
      .then(response => response.json())
      .then(json =>{
        setBoolean(false);
        setBlogDetail(json)
      })
    }
  }
  , [retriveBlog])



  const getId = (id) => {
    setBlogId(id);
    localStorage.setItem('blogId', id);
  }


  return (
  <AllContext.Provider value={{blogs, getId, blogDetail, boolean}}>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/blogs/:id" element={<BlogDetail></BlogDetail>}></Route>
      <Route path="/videos" element={<Videos></Videos>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  </AllContext.Provider>
  );
}

export default App;

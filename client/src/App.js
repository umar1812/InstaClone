import PostView from './PostView';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import { Form } from './Form';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from './Pagination';


function App() {

  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5)

  const Fetch = async () => {
    const res = await fetch('https://instaclone-app-node.herokuapp.com/postView')
    const data = await res.json();
    setUser(data);
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    Fetch();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/postView' element={
          <div className="App">
            <header className="App-header">
              <img className='logo' src='./Images/logo.png' alt='by Alexander Shatov on Unsplash' height={'50px'} />
              <h1>InstaClone</h1>
              <Link to='/form' className='cam'>
                <img className='cam' src='./Images/camera.png' height={'20px'} alt='cam' />
              </Link>
            </header>
            <div>
              <div>
                {currentPosts.map((value) => {
                  return (
                    <PostView
                      author={value.author}
                      location={value.location}
                      likes={value.likes}
                      description={value.description}
                      img={value.img}
                      date={value.date}
                    />
                  )
                })}
              </div>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={user.length}
                paginate={paginate} />

            </div>

          </div>} />
        <Route path='/form' element={
          <div>
            <div className="App">
              <header className="App-header">
                <img className='logo' src='./Images/logo.png' alt='by Alexander Shatov on Unsplash' height={'50px'} />
                <h1>InstaClone</h1>
                <img className='cam2' src='./Images/camera.png' height={'20px'} alt='cam' />
              </header>
              <Form />
            </div>
          </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

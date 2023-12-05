// App.js
import React from 'react'
import NewsFetcher from './Components/NewsFetcher'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavBar from './Components/TopNavBar'
import { useState } from 'react';
import axios from 'axios';
import Alerts from './Components/Alerts';

const App = () => {

  const [searchResults, setSearchResults] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`);
      
      if(response.data.articles.length){

        setSearchResults(response.data.articles.slice(0, 15));

      }
      
      console.log(response)
      
    }
    catch (err) {
      console.log(err)
      setErrorMessage(err.message);
      setShowAlert(true);
    }
  };

  return (
    <>
      <Alerts show={showAlert} onHide={() => setShowAlert(false)} message={errorMessage} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><TopNavBar showSearchBar={true} onSearch={handleSearch} /><NewsFetcher category="general" articles={searchResults} setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} /></>} />
          <Route path='/business' element={<><TopNavBar showSearchBar={false} /><NewsFetcher category="business" setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} /></>} />
          <Route path='/entertainment' element={<><TopNavBar showSearchBar={false} /><NewsFetcher category="entertainment" setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} /></>} />
          <Route path='/sports' element={<><TopNavBar showSearchBar={false} /><NewsFetcher category="sports" setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} /></>} />
          <Route path='/tech' element={<><TopNavBar showSearchBar={false} /><NewsFetcher category="technology" setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} /></>} />
          <Route path='/health' element={<><TopNavBar showSearchBar={false} /><NewsFetcher category="health" setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} /></>} />
          <Route path='/science' element={<><TopNavBar showSearchBar={false} /><NewsFetcher category="science" setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} /></>} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App
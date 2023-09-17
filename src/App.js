
import React from 'react';
import Row from './Components/Row';
import requests from './request';
import './App.css';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


export default function App() {
  return (
    <div className='App'>
      <NavBar/>

      <Banner/>

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
      
      <Footer/>
      
    </div>
  )
}


import "./App.css";

// import api from './api/axiosConfig';
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/home/Home";
const App = () => {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home movies = {movies} />} ></Route>
        </Route>
      </Routes>
     {/* {
      movies.map((test) => {
        return (
          <h1>{test.title}</h1>
        )
      })
     } */}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Film from "../component/Film";
import filmsServices from "../services/filmsServices";
import Pagination from "../component/pagination";


const Films = () => {
  const [films, setFilms] = useState([]);
 const [currentPage , setcurrentpage] = useState(1);
 const [totalPages , settotalPages] = useState(39242);

  const fetchFilm = async () => {
    try {
      const response = await filmsServices.fetchFilms();
      console.log(response);
      setFilms(response.data.results);
    } catch (e) {
      console.log(e);
    }
    const onPageChange = (newPage) => {
      setCurrentPage(newPage);
     
    };




  }
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  return <div className="row justify-content-center gap-3">
  
      {films.map((film, index) => {
        
        return  <Film
          key={index}
          titre={film.title}
          description={film.overview}
          affiche={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        />
      })}
     <Pagination currentPage={currentPage} onPageChange={} totalPages={totalPages} />
  </div>;
  
};

export default Films;
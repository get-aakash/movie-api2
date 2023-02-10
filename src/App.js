
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import SearchForm from './components/SearchForm';

function App() {
  const[movieList, setMovieList] = useState([])

  const addMovie = (movie) =>{
    const filteredMovies = movieList.filter((item) => item.imdbID !== movie.imdbID)
    setMovieList([...filteredMovies, movie])
    console.log(movieList)

  }
  return (
    <div className="wrapper bg-dark text-warning pt-5">
      <Container>
        <h3 className='text-center'>My movie Collection</h3>
        <hr />

        <SearchForm addMovie={addMovie}/>

      {/* form section  */}

      {/* card section  */}

      {/* list section  */}

      {/* Buttons  */}

      {/* movie lists  */}
      </Container>
    </div>
  );
}

export default App;

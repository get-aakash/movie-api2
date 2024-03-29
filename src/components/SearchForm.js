import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { fetchData } from '../axiosHelper/axiosHelper';
import CustomCard from './CustomCard';

function SearchForm({addMovie}) {
  const[movieName, setMovieName] = useState('')
  const[movie, setMovie] = useState({})
  const[error, setError] = useState(false)
  const handleChange = (e) =>{
    
    const{value} = e.target
    setMovieName(value)

  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const result = await fetchData(movieName)
    console.log(result)
    if(result.Response === "True"){
      setMovie(result)
      setError("")
    }else{
      setError(true)
    }
  }
  const removeDisplay = () =>{
    setMovieName("")
    setMovie({})
  }

  const handleAddMovie = (movie)=>{
    addMovie(movie)
    setMovieName("")
    setMovie({})
  }
  return (
    <div className='search-form'>
      <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={9}>
          <Form.Control value={movieName} placeholder="Movie name" onChange={handleChange}/>
        </Col>
        <Col>
          <Button variant='warning' type='submit'>Search</Button>
        </Col>
      </Row>
    </Form>
    <div className='mt-5 d-flex justify-content-center'>
      {movie.imdbID && <CustomCard movie = {movie} removeDisplay={removeDisplay} addMovie={handleAddMovie}/>}

    </div>
    {error && (
      <Alert variant='danger' className='mt-5'>
        No movie found. Try searching for another movie
      </Alert>
    )}
    </div>
  )
}

export default SearchForm

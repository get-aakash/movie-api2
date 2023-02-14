import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CustomCard = ({ movie = {}, removeDisplay, addMovie }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          Rating: {movie.imdbRating} <br />Year:{movie.Year}
        </Card.Text>
        {movie?.type ? (
          <Button onClick={()=>removeDisplay(movie.imdbID)} variant='danger' className='mt-3 w-100'>Discard</Button>
        ) : 
        <div className='d-flex justify-content-between'>
          <Button variant='warning' onClick={() => addMovie({ ...movie, type: "awesome" })}>Awesome</Button>
            <Button variant='danger' onClick={() => addMovie({ ...movie, type: "boring" })}>Boring</Button>
            

          <Button onClick={()=>removeDisplay(movie.imdbID)} variant='danger' className='mt-3 w-100'>Discard</Button>
          </div>}



      </Card.Body>
    </Card>
  )
}

export default CustomCard

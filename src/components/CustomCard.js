import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CustomCard = ({movie, removeDisplay,addMovie}) => {
  return (
    <Card>
        <Card.Img src = {movie.Poster}/>
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
                Rating: {movie.imdbRating} <br />Year:{movie.Year}
            </Card.Text>
            <div className='d-flex justify-content-between'>
                <Button variant='warning'onClick={()=> addMovie({...movie, type:"awesome"})}>Awesome</Button>
                <Button variant='danger'onClick={()=> addMovie({...movie, type:"boring"})}>Boring</Button>
            </div>
            <Button onClick={removeDisplay} variant='danger' className='mt-3 w-100'>Discard</Button>
            
        </Card.Body>
    </Card>
  )
}

export default CustomCard

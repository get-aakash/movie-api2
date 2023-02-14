import React, { useEffect, useState } from 'react'
import {Button, ButtonGroup } from 'react-bootstrap'
import CustomCard from './CustomCard'

const ListContainer = ({movieList, removeDisplay}) => {
    const [display, setDisplay] = useState([]);
    useEffect(()=>{setDisplay(movieList)},[setDisplay,movieList]);

    const filterMovie = (type) =>{
        if(type==="all"){
            setDisplay(movieList)
            return;
        }
        const filterMovie = movieList.filter((item)=>item.type === type)
        setDisplay(filterMovie)
    }
    return (
        <div className='movie-list mt-5'>

            <div className='mb-3'>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={()=>filterMovie('all')}>All</Button>
                    <Button variant="warning" onClick={()=>filterMovie('awesome')}>Awesome</Button>
                    <Button variant="danger" onClick={()=>filterMovie('boring')}>Boring</Button>
                </ButtonGroup>
            </div>
            <div>{display.length} Movies found!</div>
            <hr />
            <div className="list d-flex flex-wrap justify-content-around gap-2">
                {display.map((item,i)=> <CustomCard removeDisplay={removeDisplay} key={i} showDelete={true} movie={item}/>)}
                
                
            </div>

        </div>
    )
}

export default ListContainer

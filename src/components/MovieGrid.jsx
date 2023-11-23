import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Details from './Details'

function MovieGrid({results}) {
  // state to update movie and to open details of selected movie 
  const [isOpen, setIsOpen] = useState(false)
  const [movie,setMovie] = useState({})
  // to display the details of a purticular details button of a  movie we chose
  const showDetails = (index) => {
    setMovie(results[index]);
    setIsOpen(true);
  }

  useEffect(() => {
    console.log(movie);
    console.log(isOpen);
  }, [movie, isOpen]);
  return (
      <Row className='ms-3'>
        {/* open a new div above row to show purticular movie detals */}
        {isOpen && <Details setOpenModal={setIsOpen} movie={movie}/>}
        {/* display fetch data that is list of movies as rows */}
        { results.length > 0 ? results.map((item,index)=>(
            <Col key={item?.id} className='mt-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',backgroundColor:'#282525',overflowY:'hidden'}} className='p-1'>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + item?.poster_path} alt={item?.original_title} />
              <Card.Body>
                <Card.Title style={{overflowY:'hidden',color:'#ffffff'}}> {item?.original_title.slice(0,20)}... </Card.Title>
                <Card.Text>
                  <p> {item?.release_date} <br />
                 {item?.overview.slice(0,20)}... </p>
                 <Button className='btn w-100 fw-bolder' style={{ border: 'none',backgroundColor:'green' }} onClick={()=>showDetails(index)}> Details </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          // if data are not fetch then display below command as output
        )) : <p className='fw-bolder text-danger'> No result available </p>
        }
      </Row>
  )
}

export default MovieGrid
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Details({ setOpenModal, movie }) { //setOpenModal and movie passed as a prop from parent component MovieGrid
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {

  }, [isVisible])

  // for close details showing div
  const handleClose = () => {
    setIsVisible(false)
    setOpenModal(false)
  }
  return (
    <>
      {
        // display the details
        isVisible && (
          <div className='d-flex justify-content-center'>
            <Card style={{ width: '50rem', backgroundColor: '#000000', overflowY: 'hidden' }} className='p-1'>
              <Card.Img className='p-3 ms-4' style={{width:'750px',height:'400px'}} variant="top" src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path} alt={movie?.original_title} />
              <Card.Body>
                <Card.Title style={{ overflowY: 'hidden', color: '#ffffff' }}> {movie?.original_title} </Card.Title>
                <Card.Text>
                  <p> {movie?.release_date} <br />
                  {movie?.original_language} <br />
                  {movie?.origin_country} <br />
                  {movie?.overview} </p>
                  <Button className='btn fw-bolder' style={{ border: 'none', backgroundColor: 'Red',marginLeft:'80%' }} onClick={handleClose}> Close </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      }
    </>
  )
}

export default Details
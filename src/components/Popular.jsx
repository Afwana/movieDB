import React, { useEffect, useState } from 'react'
import MovieGrid from './MovieGrid'

function Popular() {
  const [popular,setPopular] = useState([])
  const [loaded,setLoaded] = useState(false)
  // fetchpopular function is used to fetch data from external api 
  const fetchPopular = () => {
    // fetch data from below url 
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7f48b4cf540efaa2964a7f2b929f04f4`)
    // to get json data
      .then(res => res.json())
      // if data fetch is success it update in setPopular state and setLoaded state 
      .then(res => {
        setPopular(res.results ?? [])
        setLoaded(true)
      })
    }
    // call fetchPopular function as soon as the page is load
  useEffect(()=>{
    fetchPopular()
  },[])
  console.log(popular);
  return (
    <div className='m-5'>
      {
        loaded ? <MovieGrid results={popular} /> : <div> Loading... </div> 
        // loaded state is true it update view as MovieGrid or it shows loading... 
      }
    </div>
  )
}

export default Popular
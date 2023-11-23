import React, { useEffect, useState } from 'react'
import MovieGrid from './MovieGrid'

function Search({searchTerm}) { // pass searchTerm as prop from home component
  const [results,setResult] = useState([]) // if searchTerm is in state will update by this
  const [loaded,setLoaded] = useState(false)
  const fetchResults = (term) => {
    // fetch data with searchTerm from url
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f48b4cf540efaa2964a7f2b929f04f4&query=${term}`)
    .then(res => res.json())
    .then(res => {
      setResult(res.results ?? [])
      setLoaded(true)
    }).catch((err)=>{
      console.log(err);
      setLoaded(true) // set loaded to true even in case of an error to stop loading indicator
    })
  }

  useEffect(()=>{
    if(searchTerm){
      // fetch results only if searchTerm is not empty
      fetchResults(searchTerm)
    }else{
      // if searchTerm is empty, set loaded to true to stop loading indicator 
      setLoaded(true)
      setResult([]) // clear results if the serach term is empty
    }
  },[searchTerm])
  return (
    <div>
      {
        loaded ? <MovieGrid results={results} /> : <p> Loading.... </p>
      }
    </div>
  )
}

export default Search
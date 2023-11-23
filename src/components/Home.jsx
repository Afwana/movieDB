import React, { useState } from 'react'
import Popular from './Popular'
import Search from './Search'

function Home() {
  // state to list movies according to searchterm
  const [searchTerm,setSearchTerm] = useState("")
  // function to get search item
  const handleInput = (e) => {
    setSearchTerm(e)
  }
  return (
    <div className='w-100'>
      <div className='d-flex justify-content-center'>
        {/* input box to search an item */}
        <input type="text" name='search' className='w-50 p-3 rounded-lg' style={{height:'20px',backgroundColor:'#282525',borderBlockColor:'black'}} onChange={(e)=> handleInput(e.target.value)} placeholder='Search Here!!!' />
      </div>
      {
        // if search term is in it shows results from search component or it shows the popular movies as grid
        searchTerm.length == 0 ? <Popular /> : <Search searchTerm={searchTerm} /> 
      }
    </div>
  )
}

export default Home
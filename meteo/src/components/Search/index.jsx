import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Search() {
    return (
        <Link to="/search"><button id="btn-search">Search for places</button></Link>
      
    )
  }
  
  export default Search
import React from 'react'
import search from '../../assets/search.svg'
import './Search.css'
const Search = () => {
  return (
    <div className='search-bar'>
        <img src={search} alt="" />
        <input type="text" placeholder='Search something' />
    </div>
  )
}

export default Search;

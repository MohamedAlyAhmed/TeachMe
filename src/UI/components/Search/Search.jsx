import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import "./Search.css"
import { Button } from '@mui/material'
export default function Search({handleSearch,searchValue,onInputChange}) {
  return (


    <div className='searchForm'>

<form className='d-flex'
 onSubmit={handleSearch}>
<input type="search"
 className='form-control'
 placeholder='Search Blog ..' 
 value={searchValue}
 onChange={onInputChange}
 />
 <Button type='submit'>search</Button>
</form>
    </div>
  )
}
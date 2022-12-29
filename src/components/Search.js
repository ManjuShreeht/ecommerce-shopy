import React,{useContext} from 'react'
import './search.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { searchContext } from './contextApi/Context'
function Search() {
  const[search,setSearch]=useContext(searchContext);
  console.log(search)
  return (
    <div className="search">
        <input type="text"  value={search} placeholder='search here'  onChange={(e)=>setSearch(e.target.value)}/>
        <SearchOutlinedIcon  className='search-icon'/>
      
    </div>
  )
}

export default Search

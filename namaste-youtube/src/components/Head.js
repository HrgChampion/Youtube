import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
const[searchQuery,setSearchQuery]=useState("");
const [suggestions,setSuggestions]=useState([]);
const [showSuggestionBox,setShowSuggestionBox]=useState(false)
const searchCache=useSelector(store=>store.search)
const dispatch=useDispatch()
useEffect(()=>{
const timer=setTimeout(()=>{
if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery])
}else{
getSearchSuggestions()
}
},200)

return ()=>{
clearTimeout(timer)
}
},[searchQuery])

const getSearchSuggestions=async()=>{
const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
const json=await data.json()
setSuggestions(json[1])
dispatch(cacheResults({
    [searchQuery]:json[1],
}))
}

const toggleMenuHandler=()=>{
dispatch(toggleMenu())
}

return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src='https://cdn-icons-png.flaticon.com/512/3917/3917215.png'/>
        <a>    <img className='h-8 mx-4' alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'/></a>
        </div>
        <div className='col-span-10 px-12'>
            <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={(e)=>setShowSuggestionBox(true)}
            onBlur={(e)=>setShowSuggestionBox(false)}
            />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>Search</button>
           {showSuggestionBox && suggestions.length>0&&( <div className='absolute bg-white py-2 px-2 w-[38rem] shadow-lg rounded-lg mx-5 border border-gray-100'>
         <ul>
         {suggestions.map((suggestion,i)=><li key={i} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {suggestion}</li>)}
         </ul>
        </div>)}
        </div>
       
        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png'/>
        </div>
    </div>
  )
}

export default Head
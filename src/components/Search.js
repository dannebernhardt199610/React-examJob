import React, {useRef} from 'react'



const Search = ( {items} ) => {
    const inputRef = useRef()
    return (
        <>
        <input  className="search" placeholder="Search" ref={inputRef}></input>


        <button className="return-button"
           onClick={() => {
             inputRef.current.focus();
           }}>
             return to search
           </button>

        </>    
    )
}

export default Search
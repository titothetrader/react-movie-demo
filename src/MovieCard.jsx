import React from 'react';

// We could pass "props" but would need to add it to every reference.
// So we can do "object destructuring" by referencing something inside the prop
//const MovieCard = (props) => {

// destructuring "props" to directly call movieDemo
const MovieCard = ({ movie }) => {
    return(
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
             </div>
             <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>  
    )
}

export default MovieCard;
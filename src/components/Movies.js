import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

function Movies() {

    const [search, setSearch] = useState('');

    const [movies, setMovies] = useState([]);
    const [filteredmovies, setFilteredmovies] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        axios.get("http://ec2-13-49-69-28.eu-north-1.compute.amazonaws.com:8082/api/v2/movies", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setMovies(res.data);
                setFilteredmovies(res.data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const filtered = movies.filter(movie => movie.title.toLowerCase().includes(search));
        setFilteredmovies(filtered);
    }, [search]);

    return (
        <div>
            <input type='text' className='m-3 p-2 w-50 rounded-3' onChange={e => setSearch(e.target.value)} placeholder='Search your favourite movies here...'></input>
            <MovieCard movielist={filteredmovies} isWishlist={false}/>
        </div>
    )
}

export default Movies
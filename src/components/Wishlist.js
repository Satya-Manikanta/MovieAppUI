import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';

function Wishlist() {

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const email = sessionStorage.getItem("email");
        axios.get(`http://localhost:8084/api/v4/wishlist/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setWishlist(res.data);
                //console.log(res.data);
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <div>
            {
                wishlist.length === 0 ?
                    <h3>Your wishlist is empty</h3>
                    :
                    <>
                        <p>Wishlist</p>
                        <MovieCard movielist={wishlist} isWishlist={true} />
                    </>
            }
        </div>
    )
}

export default Wishlist
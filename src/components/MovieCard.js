import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import PaginationComponent from './PaginationComponent';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movielist, isWishlist }) {

    //console.log(movielist, isWishlist, typeof movielist);

    const [wishlist, setWishlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(10); // Change this based on your desired items per page
    const [fav, setFav] = useState(false);
    //const [movies, setMovies] = useState([]);
    //console.log(movies);

    const navigate = useNavigate();

    const email = sessionStorage.getItem('email');
    const token = sessionStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
        //console.log(movies);
        axios.get(`http://ec2-13-49-69-28.eu-north-1.compute.amazonaws.com:8084/api/v4/wishlist/${email}`, config)
            .then(res => {
                setWishlist(res.data);
                // if (isWishlist) {
                //     // setMovies(res.data);
                //     movies = res.data;
                // }
            })
            .catch(error => console.log(error));
    }, [fav])

    const addtowish = (event) => {
        setFav(!fav);
        const id = event.target.id;
        //console.log(event.target.id);
        axios.put(`http://ec2-13-49-69-28.eu-north-1.compute.amazonaws.com:8084/api/v4/wishlist/${email}/${id}`, null, config)
            .then(res => {
                setWishlist(res.data);
                alert("Added to wishlist");
            })
            .catch(error => console.log(error))
    }

    const removeitem = (event) => {
        setFav(!fav);
        const id = event.target.id;
        //console.log(event.target.id);
        axios.delete(`http://ec2-13-49-69-28.eu-north-1.compute.amazonaws.com:8084/api/v4/wishlist/${email}/${id}`, config)
            .then(res => {
                setWishlist(res.data);
                if (isWishlist) {
                    alert("Removed from wishlist... U can add it again from below.")
                }
                else {
                    alert("Removed from wishlist");
                }
                // if (isWishlist) {
                //     //setMovies(res.data);
                //     //navigate("/wishlist");
                //     movies = res.data;
                // }
            })
            .catch(error => console.log(error))
    }

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movielist.slice(indexOfFirstMovie, indexOfLastMovie);

    const totalPages = Math.ceil(movielist.length / moviesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container>
            <Row lg={4}>
                {/* {movies.length === 0 ? setMovies(movielist): movies} */}
                {movielist && movielist.map((movie) => {
                    return (
                        <Col className="d-flex" key={movie.id}>
                            <Card key={movie.id} style={{ width: '14rem' }} className='m-2'>

                                <Card.Img variant="top" src={movie.image} >
                                </Card.Img>
                                {
                                    wishlist.findIndex(wish => wish.id === movie.id) >= 0 ?
                                        <i className="fa fa-heart fa-1x like-button" id={movie.id} title="Like Button" onClick={removeitem} />
                                        :
                                        <i id={movie.id} className="bi bi-heart like-button" style={{ color: 'red' }} title="Like Button" onClick={addtowish} />
                                }
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </Container>
    )
}

export default MovieCard
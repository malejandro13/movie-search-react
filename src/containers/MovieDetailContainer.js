import React, { Fragment } from 'react'
import useFetch from '../hooks/useFetch'
import MovieDetail from '../components/MovieDetail'
import { useParams } from "react-router-dom";
import Footer from '../components/Footer'

const MovieDetailContainer = () => {
    let { id } = useParams()
    const { data } = useFetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)

    return (
        <Fragment>
            <Footer />
            <MovieDetail
                {...data}
            />
        </Fragment>
    )
}

export default MovieDetailContainer
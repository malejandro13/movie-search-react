import React, { Fragment } from 'react'
import useFetch from '../hooks/useFetch'
import MovieDetail from '../components/MovieDetail'
import { useParams } from "react-router-dom";
import Loading from '../components/Loading'
import Footer from '../components/Footer'

const MovieDetailContainer = () => {
    let { id } = useParams()
    const { data, loading } = useFetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)

    let loader = null

    if (loading)
        loader = <Loading />

    return (
        <Fragment>
            {loader}
            <Footer />
            <MovieDetail
                {...data}
            />
        </Fragment>
    )
}

export default MovieDetailContainer
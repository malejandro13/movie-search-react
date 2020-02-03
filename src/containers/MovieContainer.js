import React, { useState, Fragment } from 'react'
import SearchForm from '../components/SearchForm'
import MoviesList from '../components/MoviesList'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import { loadState, saveState } from '../utils/storeData'

const MovieContainer = () => {
    const [form, setForm] = useState({
        movieTitle: ''
    })
    const [movies, setMovies] = useState(loadState('movies'))
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            setLoading(true)
            let res = await fetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${form.movieTitle}`)
            let data = await res.json()
            setMovies(data)
            setLoading(false)
            saveState('movies', data)

        } catch (error) {
            setMovies('movies', [])
            saveState([])
            setLoading(false)
        }
    }

    let loader = null
    let moviesList = null

    if (loading)
        loader = <Loading />

    if (movies !== null)
        moviesList = <MoviesList Search={movies.Search} />


    return (
        <Fragment>
            {loader}
            <Footer />
            <SearchForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {moviesList}

        </Fragment>

    )
}

export default MovieContainer


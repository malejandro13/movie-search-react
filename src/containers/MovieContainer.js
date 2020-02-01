import React, { useState, Fragment } from 'react'
import SearchForm from '../components/SearchForm'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'

const MovieContainer = () => {
    const [form, setForm] = useState({
        movieTitle: ''
    })
    const [movies, setMovies] = useState({
        Search: [],
        totalResults: "0"
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(form)

        try {
            let res = await fetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${form.movieTitle}`)
            let data = await res.json()
            setMovies(data)
            console.log(data)

        } catch (error) {
            setMovies([])
        }
    }

    return (
        <Fragment>
            <Footer />
            <SearchForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <MoviesList
                Search={movies.Search}
                totalResults={movies.totalResults}
            />
        </Fragment>

    )
}

export default MovieContainer


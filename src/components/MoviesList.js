import React, { Fragment } from 'react'
import MovieCard from './MovieCard'
import Emoji from './Emoji'



const MoviesList = ({ Search }) => (
    <Fragment>
        <div className="flex flex-wrap">
            {
                (!Search)
                    ? (<h1 className="w-full text-3xl text-center pt-10 px-5">No se encontraron registros <Emoji symbol="🙄" /></h1>)
                    : Search.map((movie, index) => (

                        <div key={`${movie.imdbID}-${index}`} className="w-full sm:w-1/3 md:w-1/4 flex flex-col p-3" style={{ height: "500px" }}>
                            <MovieCard
                                {...movie}
                            />
                        </div>

                    ))
            }
        </div>

    </Fragment >
)
export default MoviesList
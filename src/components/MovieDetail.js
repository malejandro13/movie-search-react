import React, { Fragment } from 'react'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'


const MovieDetail = ({ Title, Released, Poster, imdbRating, Actors, Language, Genre, Runtime }) => (
    <Fragment>
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src={(Poster !== "N/A") ? Poster : 'https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg'}
                        />
                    </div>
                    <div className="w-full mt-5 sm:mt-0 md:w-6/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="p-3 inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-teal-500">
                                <Emoji symbol="🎥" />
                            </div>
                            <h3 className="text-3xl font-semibold">
                                {Title}
                            </h3>
                            <div className="flex flex-wrap">
                                <div className="rounded-full bg-teal-500 py-1 px-3 text-white text-xs mx-1">{Released}</div>
                                <div className="rounded-full bg-teal-500 py-1 px-3 text-white text-xs mx-1">{Language}</div>
                                <div className="rounded-full bg-teal-500 py-1 px-3 text-white text-xs mx-1">{Runtime}</div>
                            </div>
                            <h3 className="pt-5"><strong>IMBD Rating:</strong> <Emoji symbol="⭐️" /> {imdbRating}</h3>
                            <h3 className="pt-5"><strong>Actors:</strong></h3>
                            <p className="pt-1 text-gray-700 text-xs">{Actors}</p>
                            <h3 className="pt-5"><strong>Categories:</strong></h3>
                            <p className="pt-1 text-gray-700 text-xs">{Genre}</p>
                            <Link to="/movie" >
                                <button className="text-teal-500 hover:text-white hover:bg-teal-500 border border-teal-500 text-xs font-semibold rounded-full px-4 py-1 mt-3 leading-normal">Back to Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)



export default MovieDetail
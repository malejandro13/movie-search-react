import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const MovieCard = ({ imdbID, Title, Year, Poster }) => (
    <Fragment>
        <Link
            to={{
                pathname: `/movie/${imdbID}`
            }}
            className="h-full"
        >
            <div
                className="bg-cover bg-center max-w-sm overflow-hidden shadow-xl rounded-lg bg-teal-600 h-full"
                style={{ backgroundImage: `url(${(Poster !== "N/A") ? Poster : 'https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg'})` }}
            >
                <div className="flex content-between flex-wrap h-full sm:hover:opacity-100 sm:opacity-0 bg-blackTransparent-50">
                    <div className="w-full flex flex-col px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="self-end fill-current text-white inline-block h-6 w-6" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" /></svg>
                    </div>

                    <div className="w-full px-6 py-4">
                        <div className="text-white font-bold text-xl mb-2">{Title}</div>
                        <p className="text-white text-base">
                            {Year}
                        </p>
                    </div>
                </div>

            </div>
        </Link>
    </Fragment>
)


export default MovieCard
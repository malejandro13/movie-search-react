import React, { Fragment } from 'react'



const SearchForm = ({ onChange, onSubmit, form }) => (
    <Fragment>
        <div className="relative pt-5 pb-5 h-full flex content-center items-center justify-center">
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
                }}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-5xl">
                                Search Movies
                            </h1>
                        </div>
                    </div>
                    <div className="w-full px-4 ml-auto mr-auto text-center">
                        <form
                            onSubmit={onSubmit}
                        >
                            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Ej: 'Star Wars'"
                                    aria-label="Full name"
                                    name="movieTitle"
                                    onChange={onChange}
                                    value={form.movieTitle}
                                />
                                <button
                                    type="submit"
                                    className="flex-shrink-0 text-teal-500 hover:text-white hover:bg-teal-500 border border-teal-500 text-xs font-semibold rounded-full px-4 py-2 mt-3 leading-normal"
                                >
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    </Fragment>
)


export default SearchForm
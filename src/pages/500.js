import React from 'react'
import FatalErrorImg from '../images/500.png'

const FatalError = () => (
    <div className="flex content-center justify-center flex-wrap h-screen">
        <h1 className="w-full flex justify-center">Error: 500 Unexpected Error</h1>
        <div className="w-full flex justify-center mt-5">
            <img className="w-8/10 sm:1/2 h-auto" src={FatalErrorImg} alt="500 Unexpected Error" />
        </div>
    </div>
)

export default FatalError
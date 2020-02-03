import React from 'react'
import NotFoundImg from '../images/404.png'

const NotFound = () => (
    <div className="flex content-center justify-center flex-wrap h-screen">
        <h1 className="w-full flex justify-center">Error: 404 Page Not Found</h1>
        <div className="w-full flex justify-center mt-5">
            <img className="w-8/10 sm:1/2 h-auto" src={NotFoundImg} alt="404 NotFound" />
        </div>
    </div>
)

export default NotFound
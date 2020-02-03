import React from 'react'
import './styles/Loading.css'

const Loading = () => (
    <div className="flex content-center justify-center flex-wrap h-screen bg-whiteTransparent-50 z-50 absolute w-full">
        <div className="loader">...loading</div>
    </div>
)

export default Loading
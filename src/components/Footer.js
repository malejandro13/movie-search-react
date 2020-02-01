import React from 'react'
import Emoji from './Emoji'


const Footer = ({ Search, totalResults }) => (
    <div className="w-full bg-teal-500 text-center object-bottom text-gray-200 text-xs py-5">
        <p>Use of <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDb API</a> for results</p>
        <p>Learning React JS <Emoji symbol="❤️" /></p>
        <p>
            <a href="https://www.udemy.com/course/aprendiendo-react/" target="_blank" rel="noopener noreferrer">
                do you want to learn React JS? (Spanish)
            </a>
        </p>
    </div >
)
export default Footer
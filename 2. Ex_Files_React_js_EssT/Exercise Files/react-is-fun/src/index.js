import React from 'react'
import ReactDOM from 'react-dom'
import Library from './Library'

let bookList = [
    {
        "title": "The Sun Also Rises",
        "author": "Jose",
        "pages": 360
    },
    {
        "title": "The Moon Also Rises",
        "author": "Maria",
        "pages": 270
    },
    {
        "title": "The Earth Also Rises",
        "author": "Juan",
        "pages": 120
    },
    {
        "title": "The Sea Also Rises",
        "author": "Carlos",
        "pages": 520
    }
]


ReactDOM.render(
    <Library books={bookList} />,
    document.getElementById('root')
)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'

class Library extends Component {

    static defaultProps = {
        books: [
            {
                "title": "The Sun Also Rises",
                "author": "Jose",
                "pages": 360
            }
        ]
    }

    state = {
        open: false,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/')
            .then(data => data.json())
            .then(data => this.setState({
                data, loading: false
            }))
    }

    componentDidUpdate() {
        console.log("The component just updated")
    }

    toggleOpenClosed = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
    }

    render() {

        const { books } = this.props;

        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? 'loading...'
                    : <div>
                        <h3>Library Products of the Week</h3>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} alt={product.name} height={100} />
                                </div>
                            )
                        })}
                    </div>
                }
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                {books.map(
                    (book, i) => {
                        return (
                            <Book
                                key={i}
                                title={book.title}
                                author={book.author}
                                pages={book.pages}
                                freeBookmark={this.state.freeBookmark} />)
                    }
                )}

                <button onClick={this.toggleOpenClosed}>Change</button>
            </div>
        )
    }

}

Library.propTypes = {
    books: PropTypes.array
}

export default Library
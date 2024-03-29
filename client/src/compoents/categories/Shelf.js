import React, { Component } from 'react';

class Shelf extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="app">
                            <div className="list-books">
                                <div className="list-books-content">
                                    <div>
                                        <div className="bookshelf">
                                            <h4 className="bookshelf-title">New Arrivals</h4>
                                            <div className="bookshelf-books">
                                                <ol className="books-grid">
                                                    <li>
                                                        <a href="" className="book-decoration">
                                                            <div className="book">
                                                                <div className="book-top">
                                                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                                                                </div>
                                                                <div className="book-title">To Kill a Mockingbird</div>
                                                                <div className="book-authors">$12</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="book">
                                                            <div className="book-top">
                                                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                                                            </div>
                                                            <div className="book-title">Ender's Game</div>
                                                            <div className="book-authors">Orson Scott Card</div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shelf;
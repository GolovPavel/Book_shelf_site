import React from 'react';

import BooksList from './BooksList';
import Pagination from './Pagination';
import './css/BooksContainer.css';

const BooksContainer = ({books, num_pages, current_page, is_loading, onChangePage}) =>
  <div className="container books_container rounded p-2">
    <div className="container">
      {
        (is_loading) ?
          <div className="row">
            <div className="loading col-12 d-flex justify-content-center">
              <img className="loadingGif" src="/static/main_app/gif/Loading_icon.gif" alt="Loading" />
            </div>
          </div>
          :
          <div className="loadedBooks">
            <BooksList books={books} />
            <Pagination
              num_pages={num_pages}
              current_page={current_page}
              onChangePage={onChangePage}/>
          </div>
      }
    </div>
  </div>

export default BooksContainer;
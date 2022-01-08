import React from 'react';
import classNames from 'classnames';

const Pagination = ({ page, pageCount, onChangePage }) => {
  const changePage = (page) => () => {
    onChangePage(page);
  }
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={classNames('page-item', { disabled: page === 1 })}><button className="page-link" onClick={changePage(page - 1)}>Trang trước</button></li>
        {page - 1 > 0 && (
          <li className="page-item"><button className="page-link" onClick={changePage(page - 1)}>{page - 1}</button></li>
        )}
        <li className="page-item active"><button className="page-link" onClick={changePage(page)}>{page}</button></li>
        {Array.from({ length: 3 }).map((_, i) => {
          if (page + i + 1 <= pageCount) {
            return (
              <li key={`page_${i}`} className="page-item"><button onClick={changePage(page + i + 1)} className="page-link">{page + i + 1}</button></li>
            )
          }
          return <></>
        })}
        <li className={classNames('page-item', { disabled: page >= pageCount })}><button onClick={changePage(page + 1)} className="page-link">Trang sau</button></li>
      </ul>
    </nav>
  )
};

export default Pagination;
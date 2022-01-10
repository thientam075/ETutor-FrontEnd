import React from 'react';
import classNames from 'classnames';

const Pagination = ({ page, pageCount, onChangePage }) => {
  const changePage = (page) => () => {
    onChangePage(page);
  }

  const pageNum = parseInt(page);

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={classNames('page-item', { disabled: pageNum === 1 })}><button className="page-link" onClick={changePage(pageNum - 1)}>Trang trước</button></li>
        {pageNum - 1 > 0 && (
          <li className="page-item"><button className="page-link" onClick={changePage(pageNum - 1)}>{pageNum - 1}</button></li>
        )}
        <li className="page-item active"><button className="page-link" onClick={changePage(pageNum)}>{pageNum}</button></li>
        {Array.from({ length: 3 }).map((_, i) => {
          if (pageNum + i + 1 <= pageCount) {
            return (
              <li key={`page_${i}`} className="page-item"><button onClick={changePage(pageNum + i + 1)} className="page-link">{pageNum + i + 1}</button></li>
            )
          }
          return <></>
        })}
        <li className={classNames('page-item', { disabled: pageNum >= pageCount })}><button onClick={changePage(pageNum + 1)} className="page-link">Trang sau</button></li>
      </ul>
    </nav>
  )
};

export default Pagination;
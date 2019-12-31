import React from 'react';


export default function Paginator ({page}) {
    return (
      <nav aria-label="Page navigation example m20">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
            <a className="page-link" href={`/${page - 1}`} tabIndex="-1">Previous page</a>
          </li>
          <li className={`page-item ${page >= 499 ? 'disabled' : ''}`}>
            <a className="page-link" href={`/${page + 1}`}>Next page</a>
          </li>
        </ul>
      </nav>
    );
}
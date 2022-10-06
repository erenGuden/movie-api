import React from "react";

const Pagination = ({ currentPage, onClick }) => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
        <a
            onClick={() => onClick(1)}
            href="!#"
            className="page-link"
          >
            &lt;&lt;
          </a>
          <a
            onClick={() => onClick(currentPage - 1)}
            href="!#"
            className="page-link"
          >
            &lt;
          </a>
          <a
            onClick={() => onClick(currentPage + 1)}
            href="!#"
            className="page-link"
          >
            &gt;
          </a>
           <a
            onClick={() => onClick()}
            href="!#"
            className="page-link"
          >
            &gt;&gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

import React from "react";

const Pagination = ({ currentPage, onClick }) => {
  return (
    <nav>
      <ul className="pagination-class">
        <li className="page-item-class">
        <a
            onClick={() => onClick(1)}
            href="!#"
            className="page-link-class"
          >
            &lt;&lt;
          </a>
          <a
            onClick={() => onClick(currentPage - 1)}
            href="!#"
            className="page-link-class"
          >
            &lt;
          </a>
          <a
            onClick={() => onClick(currentPage + 1)}
            href="!#"
            className="page-link-class"
          >
            &gt;
          </a>
           <a
            onClick={() => onClick()}
            href="!#"
            className="page-link-class"
          >
            &gt;&gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

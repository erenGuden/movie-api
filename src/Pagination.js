import React from "react";

const Pagination = ({ currentPage, onClick }) => {
  return (
    <nav>
      <ul className="pagination-class">
        <li className="page-item-class">
        <a
            onClick={(e) => onClick(e, 1)}
            href="!#"
            className="page-link-class"
          >
            &lt;&lt;
          </a>
          <a
            onClick={(e) => onClick(e, currentPage - 1)}
            href="!#"
            className="page-link-class"
          >
            &lt;
          </a>
          <a
            onClick={(e) => onClick(e, currentPage + 1)}
            href="!#"
            className="page-link-class"
          >
            &gt;
          </a>
           <a
            onClick={(e) => onClick(e)}
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

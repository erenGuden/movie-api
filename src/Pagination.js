import React from "react";

const Pagination = ({ currentPage, onClick }) => {
  return (
    <nav>
      <ul className="pagination">
          <li className="page-item">
            <a onClick={() => onClick(currentPage+1)} href="!#" className="page-link">
              Next
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default Pagination;
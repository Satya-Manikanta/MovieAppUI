import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pageItems = [];

  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      {pageItems}
    </Pagination>
  );
};

export default PaginationComponent;
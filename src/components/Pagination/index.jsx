import React from "react";
import { PaginationButton, PaginationWrapper } from "./pagination.styles";

export const Pagination = ({ current, total, onPageChange }) => {
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => current > 1 && onPageChange(current - 1)}
      >
        «
      </PaginationButton>
      {[...new Array(total)].map((item, key) => (
        <PaginationButton
          key={key}
          onClick={() => onPageChange(key + 1)}
          active={current === key + 1 ? "true" : undefined}
        >
          {key + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => current < total && onPageChange(current + 1)}
      >
        »
      </PaginationButton>
    </PaginationWrapper>
  );
};

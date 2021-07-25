import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import styled from "styled-components";

const Pager = ({
  handlePrevBtn,
  handleNextbtn,
  handleClick,
  currentPage,
  pages,
  minPageNumberLimit,
  maxPageNumberLimit,
}) => {
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <PageButton onClick={handleNextbtn}> &hellip; </PageButton>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <PageButton onClick={handlePrevBtn}> &hellip; </PageButton>
    );
  }

  const renderPageNumbers = pages.map((number) => {
    const checkPageLimit =
      number < maxPageNumberLimit + 1 && number > minPageNumberLimit;
    const isPageActive = currentPage === number;

    if (isPageActive && checkPageLimit) {
      return (
        <ActivePageButton
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </ActivePageButton>
      );
    } else if (!isPageActive && checkPageLimit) {
      return (
        <PageButton key={number} id={number} onClick={handleClick}>
          {number}
        </PageButton>
      );
    } else {
      return null;
    }
  });
  return (
    <PageContainer>
      <PreviousPageButton
        onClick={handlePrevBtn}
        disabled={currentPage === pages[0] ? true : false}
      >
        <FaCaretLeft color=' grey' size={22} />
      </PreviousPageButton>

      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}

      <NextPageButton
        onClick={handleNextbtn}
        disabled={currentPage === pages[pages.length - 1] ? true : false}
      >
        <FaCaretRight color='#00a0df' size={22} />
      </NextPageButton>
    </PageContainer>
  );
};

export const IconContainer = styled.div`
  vertical-align: middle;
  margin-top: 5px;
`;

export const PageContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000080;
  font-size: 18px;
`;

export const PreviousPageButton = styled.button`
  border: 1px solid grey;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const NextPageButton = styled.button`
  border: 1px solid #00a0df;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-right: 5px;
`;

export const ActivePageButton = styled.button`
  background-color: #000080;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 18px;
  width: 40px;
  height: 40px;
`;

export default Pager;

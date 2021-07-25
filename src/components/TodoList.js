import React, { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import styled from "styled-components";
import Pager from "./Pager";

const TodoList = ({ filteredData }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <ToDoListContainer>
      <ToDoTitleContainer>
        <HeaderTitle>USER ID</HeaderTitle>
        <ToDoTitle>TITLE</ToDoTitle>
        <HeaderTitle>COMPLETED</HeaderTitle>
      </ToDoTitleContainer>
      {currentItems.map((value, index) => {
        return (
          <ToDoContainer key={value.id}>
            <UserIdLabel>{value.userId}</UserIdLabel>
            <ToDoText>{value.title.substring(0, 25)}</ToDoText>
            <IconContainer>
              {value.completed ? (
                <FaCheck color='#00a0df' size={20} />
              ) : (
                <FaTimes color='#00a0df' size={20} />
              )}
            </IconContainer>
          </ToDoContainer>
        );
      })}
      <Pager
        handlePrevBtn={handlePrevBtn}
        handleNextbtn={handleNextbtn}
        currentPage={currentPage}
        pages={pages}
        handleClick={handleClick}
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
      />
    </ToDoListContainer>
  );
};

export const ToDoText = styled.label`
  color: black;
  font-size: 14px;
  text-align: center;
  width: 200px;
`;
export const UserIdLabel = styled.label`
  color: black;
  font-size: 14px;
  text-align: center;
`;

export const ToDoTitle = styled.label`
  color: #000080;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  width: 200px;
`;
export const HeaderTitle = styled.label`
  color: #000080;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ToDoListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  width: 350px;
  max-width: 640px;
`;
export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  background-color: white;
  margin: 5px;
  line-height: 50px;
  height: 50px;
  border-bottom: 2px solid #00a0df;
`;
export const ToDoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  margin: 5px;
  line-height: 50px;
  height: 50px;
  border-bottom: 2px solid grey;
`;
export const IconContainer = styled.div`
  vertical-align: middle;
  margin-top: 5px;
`;

export default TodoList;

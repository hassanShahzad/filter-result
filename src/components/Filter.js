import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import MultiSelect from "react-multi-select-component";
import Toggle from "./Toggle";

const Filter = ({
  allUsers,
  selectedUsers,
  isCompleted,
  handleSearch,
  handleSearchText,
  handleReset,
  setSelectedUsers,
  selectTaskStatus,
}) => {
  return (
    <FilterContainer>
      <FilterTitle>FILTERS</FilterTitle>
      <SearchContainer>
        <SearchButton onClick={(event) => handleSearch(event)}>
          <FaSearch color='white' size={20} />
        </SearchButton>

        <input type='text' onChange={(event) => handleSearchText(event)} />
      </SearchContainer>
      <Toggle isCompleted={isCompleted} onToggleChange={selectTaskStatus} />
      <UserContainer>
        <SelectUserTitle>SELECT USER ID</SelectUserTitle>
        <MultiSelect
          options={allUsers}
          value={selectedUsers}
          onChange={setSelectedUsers}
          labelledBy='Select'
          disableSearch={true}
        />
      </UserContainer>
      <ResetButton onClick={(event) => handleReset(event)}>
        Reset filters
      </ResetButton>
    </FilterContainer>
  );
};

export const FilterContainer = styled.section`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
`;
export const FilterTitle = styled.label`
  color: #000080;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  width: 210px;
`;

export const SearchButton = styled.button`
  position: relative;
  width: 44px;
  height: 44px;
  background-color: #555555;
`;

export const ResetButton = styled.button`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: clear;
  width: 220px;
  height: 44px;
  color: #000080;
  border-width: 0px;
  text-decoration: underline;
  text-decoration-color: #000080;
  font-size: 18px;
`;

export const SelectUserTitle = styled.label`
  color: #000080;
  font-size: 18px;
  font-weight: bold;
`;
export default Filter;

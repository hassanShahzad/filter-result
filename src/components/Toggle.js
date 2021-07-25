import React from "react";
import styled from "styled-components";

const Toggle = ({ isCompleted, onToggleChange }) => {
  return (
    <ToggleContainer>
      <ToggleTitle>COMPLETED</ToggleTitle>
      <ToggleWrapper>
        <ToggleText>{isCompleted ? "YES" : "NO"}</ToggleText>
        <CheckBox
          id='checkbox'
          type='checkbox'
          checked={isCompleted}
          onChange={(event) => onToggleChange(event)}
        />
        <ToggleLabel htmlFor='checkbox' />
      </ToggleWrapper>
    </ToggleContainer>
  );
};

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 30px;
`;

export const ToggleTitle = styled.label`
  color: #000080;
  font-size: 18px;
  font-weight: bold;
`;
export const ToggleText = styled.label`
  color: #000080;
  font-size: 16px;
`;

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 72px;
  height: 30px;
  border-radius: 15px;
  background: #bebebe;
  margin-left: 40px;

  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 21px;
    height: 21px;
    margin: 4.5px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 72px;
  height: 30px;
  &:checked + ${ToggleLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 21px;
      height: 21px;
      margin-left: 45px;
      transition: 0.2s;
    }
  }
`;
export default Toggle;

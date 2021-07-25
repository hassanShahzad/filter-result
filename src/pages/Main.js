import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import styled from "styled-components";
import Filter from "../components/Filter";
import TodoList from "../components/TodoList";

const Main = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const allUsers = [];

  const handleReset = () => {
    ReactDOM.unstable_batchedUpdates(() => {
      setFilteredData(allData);
      setSearchText("");
      setSelectedUsers([allUsers]);
      setIsCompleted(false);
    });
  };

  const handleSearch = () => {
    let value = searchText.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      if (selectedUsers.length !== 0) {
        for (let i = 0; i < selectedUsers.length; i++) {
          if (data.userId === selectedUsers[i].value) {
            return (
              data.title.search(value) !== -1 && data.completed === isCompleted
            );
          }
        }
      } else {
        return (
          data.title.search(value) !== -1 && data.completed === isCompleted
        );
      }
    });
    setFilteredData(result);
  };
  const selectTaskStatus = () => {
    setIsCompleted(!isCompleted);
  };
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };
  const getUniqueUsersId = (arr, key) => {
    const usersId = [
      ...new Map(arr.map((user) => [user[key], user[key]])).values(),
    ];

    for (let i = 0; i < usersId.length; i++) {
      const user = { label: usersId[i], value: usersId[i] };
      allUsers.push(user);
    }
  };
  useEffect(() => {
    if (allData.length === 0) {
      axios("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          console.log(response.data);
          setAllData(response.data);
          setFilteredData(response.data);
          getUniqueUsersId(response.data, "userId");
        })
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
    }
  }, []);
  return (
    <Container>
      <Filter
        allUsers={allUsers}
        selectedUsers={selectedUsers}
        isCompleted={isCompleted}
        handleReset={handleReset}
        handleSearch={handleSearch}
        handleSearchText={handleSearchText}
        selectTaskStatus={selectTaskStatus}
        setSelectedUsers={setSelectedUsers}
      />
      <TodoList filteredData={filteredData} />
    </Container>
  );
};

export const Container = styled.div`
  margin: 10%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export default Main;

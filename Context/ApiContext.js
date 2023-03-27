import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const baseURL = "https://exercisedb.p.rapidapi.com";

  const ExerciseDB = useCallback((url) => {
    const options = {
      method: "GET",
      url: baseURL + url,
      headers: {
        "X-RapidAPI-Key": "a570999787msh521e9ebdfd7fad9p107f22jsn1399b98fd10f",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const data = axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    return data;
  }, []);

  const getListOfBodyParts = () => {
    const url = "/exercises/bodyPartList";
    return ExerciseDB(url);
  };
  const getExerciseByBodyParts = (bodyPartName) => {
    const url = `/exercises/bodyPart/${bodyPartName}`;
    return ExerciseDB(url);
  };

  return (
    <ApiContext.Provider value={{ getListOfBodyParts, getExerciseByBodyParts }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;

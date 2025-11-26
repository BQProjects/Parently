/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ExpertContext = createContext();

export const ExpertProvider = ({ children }) => {
  const [expertsData, setExpertsData] = useState([]);

  const AddExpert = (data) => {
    const expertWithId = { ...data, id: Date.now() };
    setExpertsData((prev) => [...prev, expertWithId]);
  };

  const RemoveExpert = (id) => {
    setExpertsData((prev) => prev.filter((expert) => expert.id !== id));
  };

  const UpdateExpert = (id, updatedData) => {
    setExpertsData((prev) =>
      prev.map((expert) =>
        expert.id === id ? { ...expert, ...updatedData } : expert
      )
    );
  };

  return (
    <ExpertContext.Provider
      value={{ expertsData, AddExpert, RemoveExpert, UpdateExpert }}
    >
      {children}
    </ExpertContext.Provider>
  );
};

export const useExpert = () => {
  return useContext(ExpertContext);
};

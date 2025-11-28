/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ExpertContext = createContext();

export const ExpertProvider = ({ children }) => {
  const [expertsData, setExpertsData] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Child Psychology",
      status: true,
      bio: "Experienced child psychologist specializing in developmental disorders and behavioral therapy.",
      email: "sarah.johnson@example.com",
      experience: "10 years"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Pediatric Nutrition",
      status: false,
      bio: "Pediatric nutritionist focused on healthy eating habits and nutritional deficiencies in children.",
      email: "michael.chen@example.com",
      experience: "8 years"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Early Childhood Education",
      status: true,
      bio: "Early childhood education specialist with expertise in Montessori and play-based learning methods.",
      email: "emily.rodriguez@example.com",
      experience: "12 years"
    },
    {
      id: 4,
      name: "Dr. David Kim",
      specialization: "Behavioral Therapy",
      status: true,
      bio: "Behavioral therapist helping children with autism, ADHD, and other developmental challenges.",
      email: "david.kim@example.com",
      experience: "15 years"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialization: "Speech Therapy",
      status: false,
      bio: "Speech and language pathologist specializing in articulation disorders and communication development.",
      email: "lisa.thompson@example.com",
      experience: "9 years"
    }
  ]);

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

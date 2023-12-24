"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
// import toast from "react-hot-toast";
// import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  // const { user } = useUser();

 
  // const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({open: false, id: null});
  // const [collapsed, setCollapsed] = useState(false);

  const [project, setProject] = useState([]);


  const openModal = (id = null) => {
    setModal({open: true, id: id});
  };

  const closeModal = () => {
    setModal({open: false, id: null});
  };


  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  const fetchProject = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/project");
      const data = await res.json();
      setProject(data.projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const refreshProject = async () => {
    await fetchProject();
  };



  // const collapseMenu = () => {
  //   setCollapsed(!collapsed);
  // };

  // const allTasks = async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await axios.get("/api/tasks");

  //     const sorted = res.data.sort((a, b) => {
  //       return (
  //         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //       );
  //     });

  //     setTasks(sorted);

  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const deleteTask = async (id) => {
  //   try {
  //     const res = await axios.delete(`/api/tasks/${id}`);
  //     toast.success("Task deleted");

  //     allTasks();
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };

  // const updateTask = async (task) => {
  //   try {
  //     const res = await axios.put(`/api/tasks`, task);

  //     toast.success("Task updated");

  //     allTasks();
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };

  // const completedTasks = tasks.filter((task) => task.isCompleted === true);
  // const importantTasks = tasks.filter((task) => task.isImportant === true);
  // const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

  // React.useEffect(() => {
  //   if (user) allTasks();
  // }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        // theme,
        // tasks,
        // deleteTask,
        // isLoading,
        // completedTasks,
        // importantTasks,
        // incompleteTasks,
        // updateTask,
        modal,
        openModal,
        closeModal,
        project,
        fetchProject,
        refreshProject,
        // allTasks,
        // collapsed,
        // collapseMenu,
      }}
    >
      <GlobalUpdateContext.Provider value={{handleCloseModal}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);

import { createContext, FC, useContext, useState } from "react";
import { defaultTask } from "../constants/taskContants";
import { ITask, ITaskContext } from "../types/tasks";

const TaskContext = createContext<ITaskContext>(null!);

export const TaskContextWrapper: FC = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState<ITask>(defaultTask);
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  return (
    <TaskContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
        showTaskModal,
        setShowTaskModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext() {
  return useContext(TaskContext);
}

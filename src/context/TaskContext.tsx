import { createContext, FC, useContext, useState } from "react";
import { defaultTask } from "../constants/taskContants";
import { ITask, ITaskContext } from "../types/tasks";

const TaskContext = createContext<ITaskContext>(null!);

export const TaskContextWrapper: FC = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState<ITask>(defaultTask);
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  const [taskModalType, setTaskModalType] = useState<string>("add");
  return (
    <TaskContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
        showTaskModal,
        setShowTaskModal,
        taskModalType,
        setTaskModalType,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext() {
  return useContext(TaskContext);
}

import { Dispatch, SetStateAction } from "react";

export interface ITask {
  title: string,
  date: Date,
  description: string,
}

export interface ITasks extends Array<ITask> {};

export interface ICTasks {
  tasks: ITasks;
};

export interface ICTask {
  task: ITask;
};

export interface ICNewTaskDate {
  date: Date,
  setDate: Dispatch<SetStateAction<Date>>,
  showDate: boolean,
  setShowDate: Dispatch<SetStateAction<boolean>>,
}

export interface ICNewTaskModal {
  visible: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setTasks: Dispatch<SetStateAction<ITasks>>
}

export interface ICNewTaskForm {
  setTasks: Dispatch<SetStateAction<ITasks>>
}
import { TodoStatus } from "./types";

export const todoStatusToString = (status: TodoStatus): string => {
  switch (status) {
    case TodoStatus.NOT_STARTED:
      return "Not started";
    case TodoStatus.DONE:
      return "Done";
    default:
      return "Unknown status";
  }
};

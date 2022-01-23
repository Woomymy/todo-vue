import { TodoStatus } from "./types";

/**
 * Transform TodoStatus into a string
 * @param status New status of the todo
 * @returns {string} Status in human-readable string
 */
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

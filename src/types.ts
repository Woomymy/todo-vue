/**
 * State of the todo (done, not started, ...)
 */
export enum TodoStatus {
  DONE = "DONE",
  NOT_STARTED = "NOT_STARTED",
}

/**
 * Thing to do
 */
export interface TodoItem {
  content: string;
  id: number;
  status: TodoStatus;
}

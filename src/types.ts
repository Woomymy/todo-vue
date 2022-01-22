/**
 * State of the todo (done, wip, not started, ...)
 */
export enum TodoStatus {
  DONE = "DONE",
  WIP = "WIP",
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

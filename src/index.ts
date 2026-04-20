// TODO: Implement task-priority-queue
export interface Task {
  id: string;
  type: string;
  payload: unknown;
  priority: "critical" | "high" | "normal" | "low";
  status: "pending" | "in_progress" | "done" | "failed";
  maxRetries: number;
  retries: number;
  createdAt: number;
  updatedAt: number;
}

export class TaskQueue {
  constructor(private options?: { dbPath?: string }) {}
  async enqueue(task: Omit<Task, "id" | "status" | "retries" | "createdAt" | "updatedAt">): Promise<string> {
    throw new Error("Not implemented");
  }
  async dequeue(): Promise<Task | null> {
    throw new Error("Not implemented");
  }
  async complete(id: string): Promise<void> {
    throw new Error("Not implemented");
  }
  async fail(id: string, reason?: string): Promise<void> {
    throw new Error("Not implemented");
  }
  async getStats(): Promise<Record<string, number>> {
    throw new Error("Not implemented");
  }
}

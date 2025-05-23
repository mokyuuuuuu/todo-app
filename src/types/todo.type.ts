import { UUID } from "crypto";

type status = "Todo" | "Processing" | "Done";

export type Todo = {
    id: UUID;
    title: string;
    description: string;
    category: string;
    status: status;
    priority: number;
    createdAt: Date;
    updatedAt: Date;
}
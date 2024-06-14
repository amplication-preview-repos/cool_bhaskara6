import { DetectionResult } from "../detectionResult/DetectionResult";

export type Email = {
  content: string | null;
  createdAt: Date;
  detectionResults?: Array<DetectionResult>;
  id: string;
  sender: string | null;
  sentDate: Date | null;
  subject: string | null;
  updatedAt: Date;
};

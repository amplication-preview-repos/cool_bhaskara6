import { Email } from "../email/Email";

export type DetectionResult = {
  confidenceScore: number | null;
  createdAt: Date;
  detectionDate: Date | null;
  email?: Email | null;
  id: string;
  isPhishing: boolean | null;
  updatedAt: Date;
};

import { DetectionResultUpdateManyWithoutEmailsInput } from "./DetectionResultUpdateManyWithoutEmailsInput";

export type EmailUpdateInput = {
  content?: string | null;
  detectionResults?: DetectionResultUpdateManyWithoutEmailsInput;
  sender?: string | null;
  sentDate?: Date | null;
  subject?: string | null;
};

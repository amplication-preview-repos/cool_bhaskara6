import { DetectionResultCreateNestedManyWithoutEmailsInput } from "./DetectionResultCreateNestedManyWithoutEmailsInput";

export type EmailCreateInput = {
  content?: string | null;
  detectionResults?: DetectionResultCreateNestedManyWithoutEmailsInput;
  sender?: string | null;
  sentDate?: Date | null;
  subject?: string | null;
};

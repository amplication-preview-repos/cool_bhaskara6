import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";

export type DetectionResultUpdateInput = {
  confidenceScore?: number | null;
  detectionDate?: Date | null;
  email?: EmailWhereUniqueInput | null;
  isPhishing?: boolean | null;
};

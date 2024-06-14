import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";

export type DetectionResultCreateInput = {
  confidenceScore?: number | null;
  detectionDate?: Date | null;
  email?: EmailWhereUniqueInput | null;
  isPhishing?: boolean | null;
};

import { SortOrder } from "../../util/SortOrder";

export type DetectionResultOrderByInput = {
  confidenceScore?: SortOrder;
  createdAt?: SortOrder;
  detectionDate?: SortOrder;
  emailId?: SortOrder;
  id?: SortOrder;
  isPhishing?: SortOrder;
  updatedAt?: SortOrder;
};

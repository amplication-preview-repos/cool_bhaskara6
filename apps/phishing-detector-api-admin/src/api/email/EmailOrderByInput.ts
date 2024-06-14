import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sender?: SortOrder;
  sentDate?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};

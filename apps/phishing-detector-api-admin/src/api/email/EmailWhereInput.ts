import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DetectionResultListRelationFilter } from "../detectionResult/DetectionResultListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailWhereInput = {
  content?: StringNullableFilter;
  detectionResults?: DetectionResultListRelationFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
  sentDate?: DateTimeNullableFilter;
  subject?: StringNullableFilter;
};

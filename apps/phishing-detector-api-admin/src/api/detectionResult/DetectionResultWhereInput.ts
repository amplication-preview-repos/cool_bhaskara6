import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DetectionResultWhereInput = {
  confidenceScore?: FloatNullableFilter;
  detectionDate?: DateTimeNullableFilter;
  email?: EmailWhereUniqueInput;
  id?: StringFilter;
  isPhishing?: BooleanNullableFilter;
};

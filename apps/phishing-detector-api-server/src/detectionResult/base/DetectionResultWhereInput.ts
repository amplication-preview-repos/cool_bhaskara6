/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmailWhereUniqueInput } from "../../email/base/EmailWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

@InputType()
class DetectionResultWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  confidenceScore?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  detectionDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EmailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailWhereUniqueInput)
  @IsOptional()
  @Field(() => EmailWhereUniqueInput, {
    nullable: true,
  })
  email?: EmailWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isPhishing?: BooleanNullableFilter;
}

export { DetectionResultWhereInput as DetectionResultWhereInput };

import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("CreateDetectionResultInputObject")
class CreateDetectionResultInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    emailId!: string;

    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    isPhishing!: boolean;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    confidenceScore!: number;

    @Field(() => Date)
    @Type(() => Date)
    detectionDate!: Date;
}

export { CreateDetectionResultInput as CreateDetectionResultInput };
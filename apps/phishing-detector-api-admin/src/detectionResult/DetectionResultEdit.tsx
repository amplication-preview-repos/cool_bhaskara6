import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { EmailTitle } from "../email/EmailTitle";

export const DetectionResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="confidenceScore" source="confidenceScore" />
        <DateTimeInput label="detectionDate" source="detectionDate" />
        <ReferenceInput source="email.id" reference="Email" label="email">
          <SelectInput optionText={EmailTitle} />
        </ReferenceInput>
        <BooleanInput label="isPhishing" source="isPhishing" />
      </SimpleForm>
    </Edit>
  );
};

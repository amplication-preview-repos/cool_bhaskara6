import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { EmailTitle } from "../email/EmailTitle";

export const DetectionResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="confidenceScore" source="confidenceScore" />
        <DateTimeInput label="detectionDate" source="detectionDate" />
        <ReferenceInput source="email.id" reference="Email" label="email">
          <SelectInput optionText={EmailTitle} />
        </ReferenceInput>
        <BooleanInput label="isPhishing" source="isPhishing" />
      </SimpleForm>
    </Create>
  );
};

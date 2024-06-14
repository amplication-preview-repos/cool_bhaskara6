import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { DetectionResultTitle } from "../detectionResult/DetectionResultTitle";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="detectionResults"
          reference="DetectionResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DetectionResultTitle} />
        </ReferenceArrayInput>
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="sentDate" source="sentDate" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};

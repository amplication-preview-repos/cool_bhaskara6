import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { EMAIL_TITLE_FIELD } from "./EmailTitle";

export const EmailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="sender" source="sender" />
        <TextField label="sentDate" source="sentDate" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DetectionResult"
          target="emailId"
          label="DetectionResults"
        >
          <Datagrid rowClick="show">
            <TextField label="confidenceScore" source="confidenceScore" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="detectionDate" source="detectionDate" />
            <ReferenceField label="email" source="email.id" reference="Email">
              <TextField source={EMAIL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="isPhishing" source="isPhishing" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

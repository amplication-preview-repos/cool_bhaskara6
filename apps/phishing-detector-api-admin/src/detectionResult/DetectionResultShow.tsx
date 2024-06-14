import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { EMAIL_TITLE_FIELD } from "../email/EmailTitle";

export const DetectionResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="confidenceScore" source="confidenceScore" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detectionDate" source="detectionDate" />
        <ReferenceField label="email" source="email.id" reference="Email">
          <TextField source={EMAIL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="isPhishing" source="isPhishing" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

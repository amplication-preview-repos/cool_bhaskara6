import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EMAIL_TITLE_FIELD } from "../email/EmailTitle";

export const DetectionResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DetectionResults"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

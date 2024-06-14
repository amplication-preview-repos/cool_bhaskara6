import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "sender";

export const EmailTitle = (record: TEmail): string => {
  return record.sender?.toString() || String(record.id);
};

/**
 * Turns a comma-separated env string into a clean array of email addresses.
 * Trims whitespace and drops empty entries, so it works for one OR many addresses.
 */
export function parseEmails(value: string | undefined | null): string[] {
  return (value ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

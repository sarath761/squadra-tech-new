export type LeadSubmissionFailureType = "api_error" | "network_error";

type LeadSubmissionEvent =
  | { event: "lead_submission_attempt" }
  | { event: "lead_submission_success" }
  | {
      event: "lead_submission_failed";
      failure_type: LeadSubmissionFailureType;
    };

declare global {
  interface Window {
    dataLayer?: LeadSubmissionEvent[];
  }
}

function pushLeadEvent(event: LeadSubmissionEvent): void {
  if (typeof window === "undefined") return;

  window.dataLayer ??= [];
  window.dataLayer.push(event);
}

export function trackLeadSubmissionAttempt(): void {
  pushLeadEvent({ event: "lead_submission_attempt" });
}

export function trackLeadSubmissionSuccess(): void {
  pushLeadEvent({ event: "lead_submission_success" });
}

export function trackLeadSubmissionFailed(failureType: LeadSubmissionFailureType): void {
  pushLeadEvent({
    event: "lead_submission_failed",
    failure_type: failureType,
  });
}

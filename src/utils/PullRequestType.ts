export type PRStatus = "approved" | "rejected";
export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface PullRequestDetails {
  violations: number;
  tests: number;
  coverage: string;
  risk: RiskLevel;
  notes: string[];
}

export interface PullRequest {
  id: string;
  title: string;
  author: string;
  timeMinutes: number;
  status: PRStatus;
  details: PullRequestDetails;
}

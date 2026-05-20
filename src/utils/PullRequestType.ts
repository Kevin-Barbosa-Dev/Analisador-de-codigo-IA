export interface PullRequest {
    id: string;
    title: string;
    author: string;
    time: string;
    status: 'approved' | 'rejected';
}
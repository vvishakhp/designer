import { ActivityInfo } from './activityInfo';

export interface WorkflowItemType {
    icon: string;
}

export interface Connection {
    from: WorkflowItem;
    to: WorkflowItem;
}

export class WorkflowItem {
    type: ActivityInfo;
}

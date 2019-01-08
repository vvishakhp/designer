import { Injectable, EventEmitter } from '@angular/core';
import { WorkflowItemType } from '../models/workflowItem';
import { ActivityInfo } from '../models/activityInfo';

@Injectable()
export class WorkflowItemRegistryService {

    private workflowItemTypes: { [key: string]: ActivityInfo } = {};
    public toolChanged: EventEmitter<void> = new EventEmitter();

    addItem(name: string, type: ActivityInfo) {
        if (this.workflowItemTypes[name]) {
            throw new Error('The type with this key alredy exists');
        }
        this.workflowItemTypes[name] = type;
        this.toolChanged.emit();
    }

    getItem(name: string) {
        if (this.workflowItemTypes[name]) {
            return this.workflowItemTypes[name];
        } else {
            throw Error('No item found with the given name');
        }
    }

    public getAllItems() {
        return this.workflowItemTypes;
    }
}

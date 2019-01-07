import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CursorType } from '../models/enums';
import { WorkflowItemType, WorkflowItem } from '../models/workflowItem';
import { WorkflowItemRegistryService } from './workflowItemRegistry.service';
import { MouseListenerService } from './mouseListener.service';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private cursor: BehaviorSubject<CursorType> = new BehaviorSubject(CursorType.DEFAULT);
  private selectedTool: BehaviorSubject<WorkflowItemType> = new BehaviorSubject(null);
  private draggingItems: BehaviorSubject<WorkflowItem[]> = new BehaviorSubject(null);

  constructor(private workflowItemRegistry: WorkflowItemRegistryService,
    mouseListener: MouseListenerService) {
  }

  public setCursor(cursor: CursorType) {
    this.cursor.next(cursor);
  }

  public observeCursor(callback: (cursor: CursorType) => void): Subscription {
    return this.cursor.subscribe(callback);
  }

  public toolClick(type: string) {
    this.selectedTool.next(this.workflowItemRegistry.getItem(type));
  }

  public toolMouseDown(type: string) {
    this.selectedTool.next(this.workflowItemRegistry.getItem(type));
  }

  public toolMouseUp(type: string) {
    this.selectedTool.next(this.workflowItemRegistry.getItem(type));
  }
}

import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../../services/canvas.service';
import { CursorType } from '../../models/enums';
import { WorkflowItemRegistryService } from '../../services/workflowItemRegistry.service';
import { WorkflowItemType } from '../../models/workflowItem';
import { ActivityInfo } from '../../models/activityInfo';

@Component({
  selector: 'rpa-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss']
})
export class ToolBoxComponent implements OnInit {

  items: { name: string, type: ActivityInfo }[] = [];

  constructor(private canvaService: CanvasService, private itemsRegistry: WorkflowItemRegistryService) { }

  ngOnInit() {
    this.readTypes();
    this.itemsRegistry.toolChanged.subscribe(this.readTypes);
  }

  readTypes() {
    const allItems = this.itemsRegistry.getAllItems();
    this.items = [];
    Object.keys(allItems).forEach(key => {
      this.items.push({ name: key, type: allItems[key] });
    });
  }
}

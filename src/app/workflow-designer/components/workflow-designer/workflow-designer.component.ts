import { Component, OnInit } from '@angular/core';
import { WorkflowItemRegistryService } from '../../services/workflowItemRegistry.service';

@Component({
  selector: 'rpa-workflow-designer',
  templateUrl: './workflow-designer.component.html',
  styleUrls: ['./workflow-designer.component.scss']
})
export class WorkflowDesignerComponent implements OnInit {

  constructor(workflowItemRegistry: WorkflowItemRegistryService) {
    workflowItemRegistry.addItem('mouse/click', { icon: 'mouse' });
  }

  ngOnInit() {
  }

}

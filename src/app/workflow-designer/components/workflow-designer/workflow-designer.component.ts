import { Component, OnInit } from '@angular/core';
import { WorkflowItemRegistryService } from '../../services/workflowItemRegistry.service';

@Component({
  selector: 'rpa-workflow-designer',
  templateUrl: './workflow-designer.component.html',
  styleUrls: ['./workflow-designer.component.scss']
})
export class WorkflowDesignerComponent implements OnInit {

  constructor(workflowItemRegistry: WorkflowItemRegistryService) {
    workflowItemRegistry.addItem('mouse/click', {
      name: 'IsDecimal',
      parameteres: [
        {
          name: 'Value',
          required: true,
          valueTypes: []
        }
      ],
      type: 'RPA.Genie.Activities.IsDecimalActivity, RPA.Genie'
    });
  }

  ngOnInit() {
  }

}

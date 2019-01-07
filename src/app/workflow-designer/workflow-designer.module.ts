import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowDesignerComponent } from './components/workflow-designer/workflow-designer.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ToolBoxComponent } from './components/tool-box/tool-box.component';
import { CanvasService } from './services/canvas.service';
import { WorkflowService } from './services/workflow.service';
import { WorkflowItemRegistryService } from './services/workflowItemRegistry.service';
import { MouseListenerService } from './services/mouseListener.service';

@NgModule({
  declarations: [WorkflowDesignerComponent, CanvasComponent, ToolBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WorkflowDesignerComponent
  ],
  providers: [
    CanvasService,
    WorkflowService,
    WorkflowItemRegistryService,
    MouseListenerService
  ]
})
export class WorkflowDesignerModule { }

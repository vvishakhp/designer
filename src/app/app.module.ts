import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkflowDesignerModule } from './workflow-designer/workflow-designer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WorkflowDesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

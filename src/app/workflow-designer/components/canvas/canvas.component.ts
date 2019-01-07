import { Component, OnInit } from '@angular/core';
import { CursorType } from '../../models/enums';
import { CanvasService } from '../../services/canvas.service';

@Component({
  selector: 'rpa-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  public cursor: CursorType;

  constructor(canvasService: CanvasService) {
    canvasService.observeCursor((cur) => {
      this.cursor = cur;
    });
  }

  ngOnInit() {
  }

}

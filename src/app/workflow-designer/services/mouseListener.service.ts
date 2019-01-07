import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Point } from '../models/recangle';
import { MouseButton } from '../models/enums';

@Injectable()
export class MouseListenerService {
    private mousePosition: BehaviorSubject<Point> = new BehaviorSubject(new Point(0, 0));
    private mouseButton: BehaviorSubject<MouseButton> = new BehaviorSubject(MouseButton.NONE);

    constructor() {
        this.attachListeners();
    }

    attachListeners() {
        document.onmousemove = (evt: MouseEvent) => {
            this.mousePosition.next(new Point(evt.screenX, evt.screenY));
        };

        document.onmousedown = (evt: MouseEvent) => {
            const btn: MouseButton = (evt.button === 0) ? MouseButton.MAIN :
                (evt.button === 1) ? MouseButton.MIDDLE :
                    (evt.button === 2) ? MouseButton.AUXILURY :
                        (evt.button === 3) ? MouseButton.BROWSER_BCK :
                            (evt.button === 4) ? MouseButton.BROWSER_FWD : MouseButton.NONE;
            this.mouseButton.next(btn);
        };

        document.onmouseup = (evt: MouseEvent) => {
            this.mouseButton.next(MouseButton.NONE);
        };
    }

    public getMousePos(): Point {
        return this.mousePosition.value;
    }

    public observeMousePos(callback: (position: Point) => void): Subscription {
        return this.mousePosition.subscribe(callback);
    }

    public getMouseButton() {
        return this.mouseButton.value;
    }

    public observeMouseButton(callback: (button: MouseButton) => void): Subscription {
        return this.mouseButton.subscribe(callback);
    }
}

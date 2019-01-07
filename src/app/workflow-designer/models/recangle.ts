export class Point {
    constructor(public x: number, public y: number) { }
}

export class Size {

    public constructor(public height: number, public width: number) { }
}

export class Rectangle {
    position: Point;
    size: Size;

    public moveTo(newPos: Point) {
        this.position.x = newPos.x;
        this.position.y = newPos.y;
    }

    public moveBy(deltaPos: Point) {
        this.position.x += deltaPos.x;
        this.position.y += deltaPos.y;
    }

    public resizeBy(scale: number) {
        this.size.width *= scale;
        this.size.width *= scale;
    }

    public resize(newSize: Size) {
        this.size.height = newSize.height;
        this.size.width = newSize.width;
    }
}

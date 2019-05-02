import { PointInterface } from './generics/point.interface';

export class Point {
    id: number;
    value: number | null;
    name: number;
    order: number;
    public static sortFunction(point1: Point, point2: Point) {
        return point1.order <= point2.order ? -1 : 1;
    }
    public static fromJSON(ipoint: PointInterface): Point {
        const point = new Point();
        point.id = ipoint.id;
        point.value = ipoint.value;
        point.name = ipoint.name;
        point.order = ipoint.order;
        return point;
    }
}

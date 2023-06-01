import { generatePoints, getDefaultPoint } from '../mock/point';

const POINT_COUNT = 3;

export default class PointsModel {
  #points = [];

  constructor() {
    this.#points.push(getDefaultPoint());
    this.#points.push(...generatePoints(POINT_COUNT));
  }

  get points() {
    return this.#points;
  }
}

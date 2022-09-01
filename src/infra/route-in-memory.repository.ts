import { Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: Route[] = [];
  async insert(route: Route): Promise<void> {
    // throw new Error("Method not implemented.");
    this.items.push(route);
  }
}

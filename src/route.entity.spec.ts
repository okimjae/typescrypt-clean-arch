import { LatLng, Route, RouteProps } from "./route.entity";

describe("Route Tests", () => {
  test("Constructor", () => {
    let routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    let route = new Route(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }],
    };

    route = new Route(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 11 }],
    });
  });

  test("updateTitle method", () => {
    let routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = new Route(routeProps);
    route.updateTitle("Title updated");
    expect(route.title).toBe("Title updated");
  });

  test("updatePosition method", () => {
    let routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test("updatePoints method", () => {
    let routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = new Route(routeProps);
    const points = [{ lat: 10, lng: 20 }];
    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points);
  });
});

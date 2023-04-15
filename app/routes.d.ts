declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/dogs": Record<string, never>;
    "/dogs/:dogId": { "dogId": string };
    "/dogs/:dogId/details": { "dogId": string };
    "/dogs/:dogId/remove": { "dogId": string };
    "/dogs/:dogId/update": { "dogId": string };
    "/dogs/create": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/dogs"]
      | ["/dogs/:dogId", RouteParams["/dogs/:dogId"]]
      | ["/dogs/:dogId/details", RouteParams["/dogs/:dogId/details"]]
      | ["/dogs/:dogId/remove", RouteParams["/dogs/:dogId/remove"]]
      | ["/dogs/:dogId/update", RouteParams["/dogs/:dogId/update"]]
      | ["/dogs/create"]
  >(...args: T): typeof args[0];
}

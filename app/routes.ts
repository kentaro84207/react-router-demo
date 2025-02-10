import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/default/index.tsx", [
    index("routes/home/index.tsx"),
    route("cats/:breedId", "routes/cats/index.tsx"),
    route("about", "routes/about/index.tsx"),
  ]),
] satisfies RouteConfig;

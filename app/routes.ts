import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/default/index.tsx", [
    index("routes/home/route.tsx"),
    route("breeds/:breedId", "routes/breeds/route.tsx"),
    route("about", "routes/about/route.tsx"),
    route("contact", "routes/contact/route.tsx"),
  ]),
] satisfies RouteConfig;

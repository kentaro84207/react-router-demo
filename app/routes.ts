import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layouts/default/index.tsx", [
    index("routes/home/route.tsx"),
    route("breeds/:breedId", "routes/breeds/route.tsx"),
    route("about", "routes/about/route.tsx"),
    route("contact", "routes/contact/route.tsx"),
    route("login", "routes/login/route.tsx"),

    layout("routes/auth/route.tsx", [route("admin", "routes/admin/route.tsx")]),
  ]),
  route("/logout", "routes/login/logout.tsx"),
] satisfies RouteConfig;

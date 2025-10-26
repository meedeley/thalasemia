import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("parent", "routes/parent.tsx"),
  route("children", "routes/children.tsx"),
] satisfies RouteConfig;

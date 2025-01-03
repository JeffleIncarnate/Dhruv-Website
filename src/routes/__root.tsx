import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/navbar";
import { FollowMouse } from "../components/follow-mouse";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <FollowMouse />
      <Outlet />
    </>
  ),
});

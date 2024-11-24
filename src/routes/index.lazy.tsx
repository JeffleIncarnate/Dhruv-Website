import { createLazyFileRoute } from "@tanstack/react-router";

import { Splash } from "../components/splash";
import { About } from "../components/about";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Splash />
      <main className="w-full">
        <About />
      </main>
    </>
  );
}

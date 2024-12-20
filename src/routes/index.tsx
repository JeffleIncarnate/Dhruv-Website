import { createFileRoute } from "@tanstack/react-router";

import { Splash } from "../components/splash";
import { About } from "../components/about";
import { SelectedWorks } from "../components/selected-works";
import { Footer } from "../components/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Splash />

      <main className="flex w-full flex-col gap-40">
        <About />
        <SelectedWorks />
      </main>

      <Footer />
    </>
  );
}

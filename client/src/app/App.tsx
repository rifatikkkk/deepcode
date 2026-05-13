import { Suspense } from "react";
import { AppRouter } from "./providers/router/ui/AppRouter";

export default function App() {
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
}

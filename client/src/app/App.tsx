import { Suspense } from "react";
import { AppRouter } from "./providers";

export default function App() {
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
}

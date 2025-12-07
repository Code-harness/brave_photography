import AppRouter from "./AppRouter";
import { Analytics } from "@vercel/analytics/next";

const App = () => (
  <>
    <AppRouter />
    <Analytics />
  </>
);

export default App;

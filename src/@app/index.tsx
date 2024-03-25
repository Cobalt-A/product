import "./index.sass";
import { Providers } from "./providers";
import Routing from "@pages";

export const App = () => {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
};

import { LiveReload, Outlet } from "@remix-run/react";
import { grommet, Grommet } from 'grommet';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Grommet full theme={grommet}>
          <Outlet />
        </Grommet>
        <LiveReload />
      </body>
    </html>
  );
}
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import globalCss from "~/styles/global.css";
import darkCss from "~/styles/dark.css";
import mobileCss from "~/styles/mobile.css";
import tabletCss from "~/styles/tablet.css";
import dekstopCss from "~/styles/desktop.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
    {
      rel: "stylesheet",
      href: globalCss,
    },
    {
      rel: "stylesheet",
      href: mobileCss,
      media: "(min-width: 400px)",
    },
    {
      rel: "stylesheet",
      href: tabletCss,
      media: "(min-width: 740px)",
    },
    {
      rel: "stylesheet",
      href: dekstopCss,
      media: "(min-width: 1280px)",
    },
    {
      rel: "stylesheet",
      href: darkCss,
      media: "(prefers-color-scheme: dark)",
    },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Gymmetry", description: "Uncomplicated workout tracking." };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

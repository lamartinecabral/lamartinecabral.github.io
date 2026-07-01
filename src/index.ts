import "./browser-globals.ts";
import "@lamartinecabral/freedom";

const { elem } = window.freedom;

document.head.append(
  elem("title", "My Page"),
  elem("meta", { charset: "UTF-8" } as any),
  elem("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  }),
  elem("link", { rel: "stylesheet", href: "styles.css" }),
);

document.body.append(
  elem("h1", "Hello, World!"),
  elem("p", "This is a sample page generated using freedom."),
  elem("button", { onclick: () => alert("Button clicked!") }, "Click Me"),
  elem("div", [
    elem("h2", "Nested Elements"),
    elem("p", "This is a nested paragraph inside a div."),
  ]),
);

import { Window } from "happy-dom";

// @ts-ignore this sets a browser-like environment in Node.js
globalThis.window = new Window();
globalThis.document = window.document;

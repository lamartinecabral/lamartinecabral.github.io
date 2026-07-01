import { Window } from "happy-dom";

globalThis.window = new Window() as any;
globalThis.document = window.document;

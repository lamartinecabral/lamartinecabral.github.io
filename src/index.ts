import "@lamartinecabral/freedom";
import fs from "node:fs";

const page = {
  favicon: "LC",
  title: "Lamartine Cabral",
  description:
    "Lamartine Cabral builds practical software with a focus on programming, artificial intelligence, and simple products that solve real problems.",
};
const header = {
  title: "Passionate about programming and problem solving",
  subtitle: "This is my digital shelf. Feel free to explore.",
};
const contactSection = {
  title: "Let's Talk",
  message:
    "Want to ask me something, work together, or just say hi? Feel free to reach out.",
};
const footerSection = {
  message: "© 2026 Lamartine Cabral",
};

type Project = {
  name: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  alt: string;
  cta: string;
};

const projects: Project[] = [
  {
    name: "LAWT - Local AI With Tools",
    description:
      "An AI assistant CLI that integrates with local LLMs to perform tasks via tool calling.",
    tags: ["CLI", "Ollama", "Local AI"],
    link: "https://github.com/lamartinecabral/lawt-public",
    image: "assets/lawt.png",
    alt: "LAWT terminal interface screenshot",
    cta: "View on GitHub",
  },
  {
    name: "Nopedat",
    description:
      "A minimalist note-taking web app focused on seamless sharing and programmatic access.",
    tags: ["Web app", "Notes", "Markdown"],
    link: "https://nopedat.web.app",
    image: "assets/nopedat.png",
    alt: "Nopedat note application screenshot",
    cta: "Visit Website",
  },
  {
    name: "Sekret",
    description:
      "A lightweight encryption utility focused on simple text encryption and decryption with a minimal developer API.",
    tags: ["Encryption", "JavaScript", "NPM"],
    link: "https://npmjs.com/package/@lamartinecabral/sekret",
    image: "assets/sekret.png",
    alt: "Sekret encryption utility code example",
    cta: "View on NPM",
  },
  {
    name: "Freedom",
    description:
      "Micro-utilities for fast, vanilla JavaScript DOM creation and styling.",
    tags: ["JavaScript", "UI", "NPM"],
    link: "https://npmjs.com/package/@lamartinecabral/freedom",
    image: "assets/freedom.png",
    alt: "Freedom JavaScript UI utility code example",
    cta: "View on NPM",
  },
];

const socialLinks = [
  {
    href: "mailto:lamartine.cb@gmail.com",
    ariaLabel: "Send an email",
    image: "./assets/mail.svg",
    alt: "Email",
  },
  {
    href: "https://www.linkedin.com/in/lamartine-cabral/",
    ariaLabel: "Visit LinkedIn profile",
    image: "./assets/linkedin.svg",
    alt: "LinkedIn",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    href: "https://github.com/lamartinecabral",
    ariaLabel: "Visit GitHub profile",
    image: "./assets/github.svg",
    alt: "GitHub",
    target: "_blank",
    rel: "noreferrer",
  },
];

const { elem } = window.freedom;

const createSocialLinks = (ariaLabel: string) =>
  elem(
    "div",
    { className: "social-links", "aria-label": ariaLabel } as any,
    socialLinks.map((link) =>
      elem(
        "a",
        {
          className: "social-link",
          href: link.href,
          "aria-label": link.ariaLabel,
          ...(link.target ? { target: link.target, rel: link.rel } : {}),
        } as any,
        [elem("img", { src: link.image, alt: link.alt })],
      ),
    ),
  );

document.head.append(
  elem("meta", { charset: "UTF-8" } as any),
  elem("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  }),
  elem("title", page.title),
  elem("meta", {
    name: "description",
    content: page.description,
  }),
  elem("link", {
    rel: "icon",
    href: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%23111418'/%3E%3Ctext x='50%25' y='58%25' text-anchor='middle' font-size='34' font-family='monospace' fill='%23f3f4ef'%3E${page.favicon}%3C/text%3E%3C/svg%3E`,
  }),
  elem("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
  elem("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: "",
  } as any),
  elem("link", {
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap",
    rel: "stylesheet",
  }),
  elem("script", { type: "module", defer: true, src: "./analytics.js" } as any),
  elem("style", `\n${fs.readFileSync("src/style.css", "utf-8")}\n`),
);

document.body.append(
  elem("header", [
    elem("div", { className: "card" }, [
      elem("div", { className: "topbar" }, [
        elem("div", { className: "topbar__brand" }, page.title),
        elem("nav", { "aria-label": "Primary navigation" } as any, [
          elem("a", { href: "#contact" }, "Contact"),
          elem("a", { href: "#projects" }, "Projects"),
        ]),
      ]),
      elem("div", { className: "hero__content" }, [
        elem("div", { className: "hero__copy" }, [
          elem("h1", header.title),
          elem("p", { className: "hero__lead" }, header.subtitle),
          elem("div", { className: "hero__actions" }, [
            elem(
              "a",
              { className: "button--ghost", href: "#projects" },
              "See featured work",
            ),
            elem(
              "a",
              { className: "button", href: "#contact" },
              "Get in touch",
            ),
          ]),
        ]),
      ]),
    ]),
  ]),
  elem("main", [
    elem(
      "section",
      { id: "contact", "aria-labelledby": "contact-title" } as any,
      [
        elem("article", { className: "card" }, [
          elem("div", { className: "card__body" }, [
            elem("span", { className: "card__label" }, "Contacts"),
            elem("h3", { id: "contact-title" }, contactSection.title),
            elem("p", contactSection.message),
          ]),
          createSocialLinks("Contact links"),
        ]),
      ],
    ),
    elem(
      "section",
      { id: "projects" },
      projects.map((project) =>
        elem("article", { className: "card" }, [
          elem("div", [
            elem("span", { className: "card__label" }, "Featured project"),
            elem("h3", project.name),
            elem("p", project.description),
            elem(
              "div",
              { className: "project__tags" },
              project.tags.map((tag) => elem("span", tag)),
            ),
            elem("div", [
              elem(
                "a",
                {
                  href: project.link,
                  target: "_blank",
                  className: "button",
                } as any,
                project.cta,
              ),
            ]),
          ]),
          elem("div", { className: "project__image" }, [
            elem(
              "a",
              {
                href: project.link,
                target: "_blank",
                tabIndex: -1,
              } as any,
              [elem("img", { src: project.image, alt: project.alt })],
            ),
          ]),
        ]),
      ),
    ),
  ]),
  elem("footer", [
    elem("div", { className: "card" }, [
      elem("p", footerSection.message),
      createSocialLinks("Social links"),
    ]),
  ]),
);

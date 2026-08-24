# IIST Exhibition Sites

This repository contains the static sites IIST creates for exhibitions and
events. Each event lives on its own branch so its content, assets, history, and
deployment can evolve independently.

## Event branches

- `computex-2026` — IIST's COMPUTEX 2026 site

## Branch convention

Use a lowercase, hyphenated event name followed by its year:

```text
<event-name>-<year>
```

For example: `computex-2026`.

Start a new event from `main` when building a site from scratch:

```bash
git switch main
git pull
git switch -c <event-name>-<year>
```

To reuse an existing event site as a starting point, create the new branch from
that event branch instead. Keep `main` limited to this repository guide and the
list of available event branches.

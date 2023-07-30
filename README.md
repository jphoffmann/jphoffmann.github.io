# Portfolio - Jakob Hoffmann
Project data is loaded from a local [JSON file](src/projects.json).
All project figures/images are put into the [static folder](static/projects).
The main font and other global css styling is defined in [app.css](src/app.css).

#### Projects JSON

Notable Fields:

border: [mobile | shadow] \
Optional. Displays thumbnail border as mockup phone (mobile),\
fullscreen image with shadow (shadow)\
or only fullscreen thumbnail (none).

slug: string\
URL parameter (see definition [Slug](https://developer.mozilla.org/en-US/docs/Glossary/Slug)).

## Developing

Once installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying
TODO: Github Pages deployment info here.
# QA Assistant

The QA Assistant makes the process of QAing a novel or other piece of writing easy!

This is a personal project for which I am not being paid, and is offered free of charge. You can find more information at [https://shinotype.dev/qa-assistant](https://shinotype.dev/qa-assistant).

You can file bug reports and feature requests on the issues tab. Given the nature of the project, please note that there is no guaranteed timeline of delivery for any changes, nor is there any guarantee that feature requests will be implemented.

## Updates

**Last updated:** 7/12/2023.

## Setup
```npm install```

## Run Tests
```npm test```

## Build for development
```npm run build-dev```
This will generate an unminimized dist/qatool.js with source maps.

## Build for live development
```npm run dev```
This will start a server at localhost:8080 that will auto-refresh when files change.

The pages will be at `localhost:8080/qatool.html` and `localhost:8080/db.html`.

## Build for release
```npm run build```
This will generate a minified dist/qatool.js.

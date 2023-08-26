# SOB Intranet FullStack

_PHP - MySQL - Svelte FullStack Web Application for Manage SOB Teaching_

Features:

- User management, authentication
- User Hompage & Git link collection
- SSE Online Stream
  - [Markdown](https://www.markdownguide.org/) support
  - [MathJax](https://www.mathjax.org/) support
  - [Syntax highlighter](https://highlightjs.org/) (a11y-dark theme)
- Hungarian language support

## Setting Up

- copy all php files to your backend server from backend folder
- run .sql dump files on your MySQL database
- set up mysql connection in php files
- rename serveurl.example.js to serveurl.js
- set up your server in serveurl.js

```bash
npm i
npm run dev
```

## Build

```bash
npm run build
```

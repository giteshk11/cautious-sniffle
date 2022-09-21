# atlan-task

## Application Hosted at

[https://stately-puffpuff-c22d5f.netlify.app/](https://stately-puffpuff-c22d5f.netlify.app/)

## Basic Overview

SQL runner is a web-based application that can be used to run and displaying the results of the sql queries.
There are two ways in which a user can entry queries

1.  **Visual**: Using this option a user can explore the data without having the knowledge of SQL.

    ![visual](screenshots/Screenshot%202022-09-20%20at%2010.37.30%20PM.png)
    ![visual](screenshots/Screenshot%202022-09-20%20at%2010.37.36%20PM.png)
    
2.  **Editor**: Using this option a user can explore data using advance syntax like JOINS, GROUPS, etc.
    ![Editor](screenshots/Screenshot%202022-09-20%20at%2011.19.47%20PM.png)

Also, there's a database schema information chart on right side which shows the table structure of the available tables.

![schema](screenshots/Screenshot%202022-09-20%20at%2011.21.34%20PM.png)

## How to use
### Visual Editor:
    1. Click on any of the dropdowns to change the query to get desired results.
    2. Click on run button on the top to execute the query.
    3. A table should be visible with the results
    
### Code Editor:
    1. You can use pre-defined queries available or write in code editor.
    2. Hit the run button to execute the query.
    3. A table should be visible with the results.

## Framework/Packages used

- Vue 3
- TailwindCSS
- Vite
- CodeMirror (Code Editor)

## Application load time

- Overall performance score 95/100
  
  - `First contentful paint (FCP)`: 0.81 s
  
  - `Largest contentful paint (LCP)`: 0.92 s
  
  - `Total size`: 0.5MB (HTML size: 0.4 KB, JS Size: 454.2 KB, CSS size: 14.5 KB)

- Metrics used for measuring the load time: 
    - First contentful paint ( FCP )
    - Largest contentful paint ( LCP )
    - Size of resources i.e. HTML, CSS, JS & other assets.

- Measured using BrowserStack's Speedlab Tool which runs tests on real devices and can run tests on mutiple devices.

Detailed Report [link](https://www.browserstack.com/speedlab/new-report/151d5b7a4ff11c8dcd6c2bfa4208f8ba4accfb8c)

## Project Setup

```sh

pnpm install

```

### Compile and Hot-Reload for Development

```sh

pnpm dev

```

### Type-Check, Compile and Minify for Production

```sh

pnpm build

```

### Lint with [ESLint](https://eslint.org/)

```sh

pnpm lint

```

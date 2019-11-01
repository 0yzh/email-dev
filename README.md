# html-email template

## Getting started

Start by:

- Creating a new project folder.

- Navigate to the new folder directory in the terminal / CLI.

- Clone this repo:

```shell
git clone https://github.com/0yzh/email-dev.git
```

## Install dependencies

On the command line, navigate to the newly create `/email-dev` folder and run npm install:

```shell
cd email-dev
npm install
```

## Development

You can add your development phase HTML in the `index.njk` file and LESS in the: `styles.less` file.

When you're ready to compile, run this command: `npm run build`

This will generate a two new folders:

- `/stage` contains the compiled nunjucks and LESS->CSS files.

- `/build` contains the final HTML with rendered nunjucks data and inlined CSS / -premailer styles: `/build/index.html`

## Data

- Data is passed through this method:

```js
const htmlString = nunjucks.render('index.njk', { n: 1 });
```

# WIP...

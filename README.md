# Delta Sigma PI UCI Website

This version of the website for the Pi Sigma Chapter of Delta Sigma Pi was written using [Gatsby](https://www.gatsbyjs.org).

Google Sheets API is being used to pull data for brother bios and careers. More information about the plugin source [here](https://www.gatsbyjs.com/plugins/gatsby-source-google-sheets/).

## How to Run Locally

Make sure you have Gatsby.

```sh
npm install -g gatsby-cli
```

Install all dependencies.

```sh
npm install
```

Then, run the development server.

```sh
npm run develop
```

Now you can access the site at `localhost:8000`.

You can access GraphQL queries through `localhost:8000/__graphql`

## How to Edit Brother Biographies

Access DOT Google Drive. Access Bro Bios Google Sheets and either add a new worksheet or edit an existing one. 

**Caution: If you want to add new fields, you must edit the code to reflect additional field changes or it will BREAK**

## How to Edit Brother Careers

Access DOT Google Drive. Access Careers Google Sheets and either add a new worksheet or edit an existing one. 

Follow the Sample Sheet!!

## How to Deploy the Site

First, test if the site can be built locally.

```sh
npm run build
```

If a success, build to gh-pages.

```sh
npm run deploy
```
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

In the code, update all instances of `allGoogleSheetSummer2021Row`. This GraphQL query points to that sheet. In `gatsby-node.js`, you should be able to change the worksheet name to a the dataset of your term.  

**Caution: If you want to add new fields, you must edit the code to reflect additional field changes or it will BREAK**

When creating a new biography sheets, you must create a `Slug` field. Slug is firstname_lastname.

## How to Edit Brother Careers

Access DOT Google Drive. Access Careers Google Sheets and either add a new worksheet or edit an existing one. 

## How to Deploy the Site

**You must run `npm run deploy` after you update ANY of the Google Sheets. This command will run the GraphQL queries again and create new static pages**

First, test if the site can be built locally.

```sh
npm run build
```

If a success, build to gh-pages.

```sh
npm run deploy
```
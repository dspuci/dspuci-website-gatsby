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

## How to Deploy the Site

First, test if the site can be built locally.

```sh
npm run build
```

If a success, build to gh-pages. Running this command will build, then publish the build output of `master` branch to gh-pages.

```sh
npm run deploy
```

## Updating information

In this section, we will detail how to edit "dynamic" information. Currently, GatsbyJS pulls information from `.xlsx` files to render brother biographies, director positions, ec positions, and careers. Make changes by updating the respective `.xlsx` files*.

<i>*Notice we use `gatsby-transformer-excel` plugin in `gatsby-config.js`. This is a plugin that allows gatsby to read and query information from `.xlsx` files using GraphQL. 

More about it [here](https://www.gatsbyjs.com/plugins/gatsby-transformer-excel/).
</i>

### Biographies

Visit `/src/data/{termYear}` (e.g. `/src/data/summer21`), and edit `bios_{termYear}.xlsx`. 

This should have the following fields (*required):
- Timestamp
- First Name*
- Last Name*
- Slug (Not necessary, remove in future)
- Class
- Year
- Hometown
- Major
- Minor
- Industry
- Recent Position
- Involvements
- Family
- Email
- Bios

For future DOTs, make a google form requiring a minimum of these, then export it as an `.xlsx` file.

### EC/Director positions

This one's very straight-forward -- update `directors_term.xlsx` and `leadership_summer.xlsx`. Make sure `slug` of names match up with their image names.

### Careers

For every year, add a new tab for `Full Time Offers 202x` and `Internships 202x`. In the `.xlsx` file, separate careers by category => information.

***
A future todo: create an algorithm that simple sorts all career information without having to separate by category. Sort based on career name, then first name. (basically have the code do the sorting, not us).
***

### Brother Photos

Brother photos are available under `/static/images/brothers/{termYear}`. Change the brother image names to their respective slugs.


### Additional Information

If you are in need of any raw Google Sheets files, they are stored under the `dot@ucidsp.com` gsuite documents.

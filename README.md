This is a coding assignment for Elisa. The deployed version can be found [here](https://elisa-coding-assignment.vercel.app/).

## Getting Started

#### Install the dependencies

```bash
yarn
# or
npm run dev
```

#### Start the application

```bash
yarn dev
# or
npm run dev
```

The application will open on [http://localhost:3000](http://localhost:3000).

#### Start Storybook

```bash
yarn storybook
# or
npm run storybook
```

This will open Storybook automatically on [http://localhost:6006](http://localhost:6006)

#### Tools used in this project

- [NextJS](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/) for styling
- [Storybook](https://storybook.js.org/) for testing the UI
- [FontAwesome](https://fontawesome.com/) for the icons
- [date-fns](https://date-fns.org/) for formatting dates easily

## File Structure

This project follows the NextJS 13 [recommended structure](https://nextjs.org/docs/getting-started/project-structure).
Inside the `app` directory, you will find the following:

`_components` Components that aren't specific to any page, and can be re-used anywhere in the application.

`_config` For static configuration such as the navbar content.

`_types` Shared type declarations.

`_utils` Useful reusable functions such as fetch or date formatting.

`(routes)` The application's pages.

## Thoughts about improvements

This project was done within a limited time frame, so here are a few things that could be improved:

- Testing. Most components are documented in Storybook, but more interaction testing is needed to make sure that the application is working as it should.

- Accessibility. There should also be accesibility tests such as checking keyboard navigation. This can be done with Storybook interactions as well. More work also needs to be done to make this accessible for screen readers, for example by adding more aria-labels.

- Error handling. At the moment if the API returns an error, the application will only show NextJS's default error page. It would be better to have custom 500 and 404 error pages, and to catch potential errors properly. This could be done more easily by using SWR.

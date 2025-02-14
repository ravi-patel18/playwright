# Appetize Playwright Tests

This project was generated and exported by [Appetize](https://appetize.io).

## Running your Tests

Make sure you have [Node.js](https://nodejs.org/en) 18 or later installed. Then, in this directory, run:

```bash
npm install             # install dependencies
npx playwright install  # setup Playwright browsers
npm run test            # run your tests!
```

View the [Appetize documentation](https://docs.appetize.io/javascript-sdk/playwright) for more information.

## Configuration

You'll find the configuration for your Appetize tests in `playwright.config.ts`. This file contains configuration for both
Playwright and your Appetize sessions.

These will apply for all tests in your project, but you can override them in your test files with:

```ts
import { test } from '@appetize/playwright';

test.use({
    config: {
        /* some config */
    },
});
```

## Writing more tests

You can record more tests with AppRecorder on [appetize.io](https://appetize.io) and copy them here, or you can write
tests [manually](https://docs.appetize.io/javascript-sdk/automation).

Here's an example of automating a login flow for an Android app:

```ts
import { test } from '@appetize/playwright';

test('shows greeting when user logs in', async ({ session }) => {
    // type username
    await session.tap({
        element: {
            attributes: {
                'resource-id': 'username_field',
            },
        },
    });
    await session.type('jordan_doe');

    // type password
    await session.tap({
        element: {
            attributes: {
                'resource-id': 'password_field',
            },
        },
    });
    await session.type('securepassword');

    // tap login button
    await session.tap({
        element: {
            attributes: {
                text: 'Login',
            },
        },
    });

    // expect to see the user's name on the screen
    await expect(session).toHaveElement({
        attributes: {
            text: 'Welcome, Jordan Doe',
        },
    });
});
```

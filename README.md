# HeliosX Tech Test

## Installation

- run `yarn` to install dependencies.
- run `yarn dev` to run the development server
- run `yarn test` to run the test(s)

- Node version: 22.11.0
- npm version: 10.9.0
- yarn version: 1.22.22

## Methodology

### Tech Stack

This project was written in React with vite and typescript.
I have personally not used Tailwind before, but I understood how it worked and knew a bit about it. I decided on Tailwind for styling as I know that HeliosX use it extensively and it seemed like an interesting challenge.
I wrote a very basic test using vitest.

### Approach

I decided when I attmpted this that I would utilise the browsers native capabilities to build the form.
All the inputs in the form are uncontrolled and handled by the browser.
I made use of the Browser FormData api to manage the form data submission.
To show and hide the questions I wrote some css that only shows a given fieldset of radios when it's sibling has a value.
This approach means that there are no react renders needed at any point in the form.
The downside to this approach is that you miss out on some of the nicities that come with controlled react forms, such as on the fly validation, or apply dynamic classes, e.g. having a disabled class on the button based on all the values being filled out.

### What I didn't do

My tests are overly simplistic and don't handle sad paths. I didn't test some of the native browser capabilities like required fields. I also didn't test whether questions were visible or not because they're all renderred but hidden by a CSS that the tests didn't have access to.

I would have use tanstack-query to handle caching of server data. I often use the useMutation hook for wrapping POST requests.

My tailwind knowledge is very limited, I just wrote some of the more complex styles in a standard css file.

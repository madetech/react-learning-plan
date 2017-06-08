# Learning React

A work in progress learning plan for React.

## Getting started

1. [Install NVM](https://github.com/creationix/nvm/blob/master/README.md#install-script)
2. Install a recent version of Node.js. For example: `nvm install v7.10.0`
3. Install Yarn: `npm install -g yarn`. Yarn is a replacement for npm, which is the most popular JS package manager.
4. Install dependencies: `yarn`
5. Start the storybook: `yarn run storybook`
6. Visit [http://localhost:6006](http://localhost:6006)
7. Run ` yarn test -- --watch ` to run the tests for TDD.

## Weeks

### Week 1

#### Goals

- [x] Know how to create a React component
- [x] Know how to render a React component with props
- [x] Understand what prop types are and how to use them
- [x] Know how to change the behaviour of a component based on a prop
- [ ] Know about `this.props.children`
- [x] Know how to set initial state of a component
- [x] Know how to change state of a component based on events

#### Session

- Introduce the Storybook, and show examples of basic React components.
- As a group, clone simple UI elements used by Hacker News as React components.

#### Homework

- Create a React component which can be put into the `NewsItem` component.

### Week 2

#### Goals

- [x] Know how to TDD React components using Jest
- [x] Know how to TDD React components using `mount` from Enzyme

#### Session

- Introduce Jest and Enzyme, and the test suite.
- As a group, TDD the creation of some React components.

#### Homework

- Recreate the component from last week's homework using TDD.

### Week 3

#### Goals

- [ ] Know how to TDD React components using `shallow` and `render` from Enzyme
- [ ] Know how to TDD React components using Sinon

#### Session

- Create a component with at least one test for each of `shallow`, `mount` and `render` from Enzyme.
- Use `shallow` to test the composition of one component.
- Use `mount` to test the behaviour of one component.
- Use `render` to test the content of one component.
- Use Sinon to test a component with a callback prop.

#### Homework

- Create a component which is tested using Sinon and Enzyme.

### Week 4

#### Goals

- [ ] Know how to use context
- [ ] Understand the concept of a higher order component

#### Session

- Create a Theme component which makes theme variables available in context.

#### Homework

???

### Week 5

#### Goals

- [ ] Know how to use lifecycle functions to build complex components
- [ ] Know how to fetch data for a component using lifecycle functions.
- [ ] Understand the difference between "smart" components and "dumb" components.
- [ ] Understand how to compose smart + dumb components to separate presentation code, business logic and state operations.

#### Session

???

#### Homework

???

### Week 6

#### Goals

- [ ] Know one method of creating a new universal React app.
- [ ] Know one method of adding pages and navigation.
- [ ] Know how to use APIs to build a small web app.

#### Session

???

#### Homework

???

## Stretch Goals

- [ ] Introduce Redux, learning in isolation from React
- [ ] Introduce Redux sagas (???)
- [ ] Webpack
- [ ] Next.js
- [ ] Know how to TDD React components using snapshots

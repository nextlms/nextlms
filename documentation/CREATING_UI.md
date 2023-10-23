# Creating Shared UI Component (Atom)

This guide will help you create a shared UI component (atom) for the UI Kit. The UI Kit is a collection of UI components that can be used across all of the UIs in the application. The UI Kit is located in the `src/components/ui` directory.

## Creating a new UI component

To create a new UI component, you will need to create a new directory in the `src/components/ui` directory. The name of the directory should be the name of the component in `kebab-case`. For example, if you are creating a button component, the directory name should be `button`.

## Tech Stack

The UI Kit uses the following tech stack:

- tailwind-variants
- tailwindcss
- Radix UI if needed

## Types

The UI Kit should be written in TypeScript. This will allow us to have type safety across the application.

## Setup Storybook

After creating component, you will need to setup Storybook for the component. Storybook is a tool for developing UI components in isolation. It makes building stunning UIs organized and efficient. You can learn more about Storybook [here](https://storybook.js.org/).

To setup Storybook, you will need to create a new file in the component directory called `stories.js`. This file will contain the stories for the component. You can learn more about stories [here](https://storybook.js.org/docs/basics/writing-stories/).

### Example

```js
import Button from './button';

export default {
  title: 'UI/Button',
  component: Button,
};

export const Default = () => <Button>Default</Button>;
export const Primary = () => <Button primary>Primary</Button>;
export const Secondary = () => <Button secondary>Secondary</Button>;
export const Danger = () => <Button danger>Danger</Button>;
export const Disabled = () => <Button disabled>Disabled</Button>;
```

## Run Storybook

To run Storybook, you will need to run the following command:

```bash
pnpm storybook
```

This will start Storybook on port `6006`. You can view the Storybook UI by visiting `http://localhost:6006`.

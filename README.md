# NEXTLMS

Next Generation of Learning Management System, Engaging, Interactive, and Fun.

## Installation

1. Clone this repository
2. Run `pnpm install`
3. Run `pnpm dev`

## Architecture

This project is using Monorepo architecture, with the following structure:

- `apps` folder contains all the apps that will be used in the project.
- `libs` folder contains all the shared libraries that will be used in the project.
- `apps/platform` folder contains the platform app.
- `apps/api` folder contains the api or backend app.

## Contributing

### UI

UI folder is located in `libs/ui`, it contains all the UI components that will be used in the project. All UI component should be build using Tailwind Variants, well typed, and well documented.

### Feature

To add a new feature, create a PR first, and create new branch with the following format:

- `feature/<feature-name>` for new feature.

### Bugfix

To fix a bug, create a PR first, and create new branch with the following format:

- `bugfix/<bug-name>` for new feature.

### Commit Message

Commit message should be in the following format:

- `feat(scope): <commit-message>` for new feature.
- `fix(scope): <commit-message>` for bugfix.
- `chore(scope): <commit-message>` for chore.

#### Example

- `feat(ui): add button component`
- `fix(ui): fix button component`
- `chore(ui): change button dependencies`

### Important Notes

- Do not commit directly to `main` branch.
- Always create a PR first before merging to `main` branch.
- Always create a new branch for every PR.
- Always create a new branch for every feature/bugfix.

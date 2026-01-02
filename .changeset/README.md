# Changesets

This directory contains changesets for the project.

## What are changesets?

Changesets are small descriptions of changes that will be included in the next release. They help us manage versioning and changelogs across all packages in the monorepo.

## How to add a changeset

When you make a change that should be included in the next release:

1. Run `pnpm changeset` in the root of the project
2. Follow the prompts to describe your change
3. Select which packages are affected
4. Choose the type of version bump (patch, minor, or major)
5. Commit the changeset file that is created

## What happens next?

- The changeset file will be committed to the repository
- When you're ready to release, run `pnpm changeset version` to update package versions
- Then run `pnpm changeset publish` to publish to npm

## Version types

- **patch**: Bug fixes, small changes
- **minor**: New features, non-breaking changes
- **major**: Breaking changes

## More information

See [Changesets documentation](https://github.com/changesets/changesets) for more details.

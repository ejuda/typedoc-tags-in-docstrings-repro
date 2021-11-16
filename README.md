# Some JSDoc tags prevent class docstrings from showing

## Search terms

tags, docstring, class, extends, jsdoc

## Expected Behavior

TypeDoc should be able to render docstrings no matter what JSDoc tags are
present in them.

## Actual Behavior

Some tags (`@class`, `@extends`) prevent class documentation from showing.

For instance the documentation for these two classes will not render:

```ts
/**
 * @class AnotherClass
 *
 * This is another class.
 */
class Bravo {}

/**
 * @extends Alpha
 *
 * This is an other class.
 */
class Charlie extends Alpha {}

/**
 * @class D
 * @extends Alpha
 *
 * Some docs.
 */
class Delta extends Alpha {}
```

However, adding a made-up tag afterwards restores the class documentation:

```ts
/**
 * @class E
 * @madeupTag
 *
 * This is a different class.
 */
class Echo {}

/**
 * @class F
 * @extends Alpha
 * @anotherMadeupTag
 *
 * This is a different class.
 */
class Foxtrot extends Alpha {}
```

I have only tested `@class` and `@extends` tags for this behavior, but it's
possible that this also affects other tags (and nodes other than classes).

## Steps to reproduce the bug

1. Clone [the reproduction
   repository](https://github.com/ejuda/typedoc-tags-in-docstrings-repro).
2. `npm ci`
3. `npm run docs`
4. This will generate documentation in `docs` directory.

## Environment

-   Typedoc version: 0.22.9
-   TypeScript version: 4.4.4
-   Node.js version: 14.15.4
-   OS: Windows 10

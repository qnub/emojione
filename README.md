#![Emoji One Logo](http://git.emojione.com/assets/png/1F40C.png) Meteor Emoji One package
> bringing you [emojione.com](http://emojione.com/) & [emoji.codes](http://emoji.codes/)

The web's first and only complete open source emoji set. It is 100% free and super easy to integrate.


## The Idea

To standardize emoji on the web through the use of common :shortnames:.

When storing user inputted text in your database, say from a guestbook or through a CMS admin, you should always make sure you are storing text containing only :shortnames: and not Unicode emoji characters or emoji images. Then, when you are displaying that content to the user, you can convert it client-side using this package.


#### _What are Shortnames?_

 Shortnames are semi-standardized human-readable identifiers for each emoji icon. Many online web applications will accept these shortnames as alternatives for the actual unicode character. We've compiled the full list over at [emoji.codes](http://emoji.codes/) with quick copy & search functions.


## Installation

```
> meteor add qnub:emojione
```


##Usage Examples

Below there are some examples of how you will actually use the libraries to convert Unicode emoji characters to :shortnames: and :shortnames: to emoji images.

### Template helpers

    My emoji {{emojione ':beers:'}} text.

Or

    {{#emojione}}My emoji :beers: text.{{/emojione}}

## Information

### Bug reports

If you discover any bugs, feel free to create an issue on GitHub. We also welcome the open-source community to contribute to the project by forking it and issuing pull requests.

For meteor package bugreports:

 *  https://github.com/qnub/emojione/issues

For original Emoji One library bugreports:

 *  https://github.com/Ranks/emojione

## Licenses

### Emoji One Artwork

*  Applies to all PNG and SVG files as well as any adaptations made.
*  License: Creative Commons Attribution-ShareAlike 4.0 International
*  Human Readable License: http://creativecommons.org/licenses/by-sa/4.0/
*  Complete Legal Terms: http://creativecommons.org/licenses/by-sa/4.0/legalcode


### Emoji One Non-Artwork

*  Applies to the Javascript, JSON, PHP, CSS, HTML files, and everything else not covered under the artwork license above.
*  License: MIT
*  Complete Legal Terms: http://opensource.org/licenses/MIT

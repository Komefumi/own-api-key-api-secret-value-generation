# API Key and Secret Generator

One would be familiar with values like `API_KEY` and `API_SECRET` provided by applications like Shopify and Twitter to develop applications that integrate with the respective platforms.

With this project, one could create values that hold the similar alphanumeric format.

These values are intended to be secure. But, no warranties are provided.

`BCRYPT` is made use of to generate strings, and non-alphanumeric values are subsequently stripped out to generate the final values.

It's been built with the hope that the method used as seen in `generate.js` generates sufficiently secure values.

Just install dependencies, then run `node generate.js` and you'll have a `result.json` file having the values

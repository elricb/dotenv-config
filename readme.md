# dotenv-config

Project `.env` loader.

## Install

```
$ npm install --save-dev @elricb/dotenv-config
```

## Usage

Include and call with base directory.  Searches up from base directory for `.env`.

### CJS

```js
const dotenv = require("@elricb/dotenv-config");
dotenv(__dirname);
```

### ESM

```js
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import dotenv from "@elricb/dotenv-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv(__dirname);
```

### package.json

Ensure your `.env` file is packaged with your build.

```
{
  ...
  "files": [
    ".env",
    ...
  ],
}
```

## Documentation

### Release Notes

View commit tag for release notes.

* [release list](https://github.com/elricb/dotenv-config/tags)


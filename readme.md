# dotenv-config

Project `.env` loader.

## Install

```
$ npm install --save-dev @elricb/dotenv-config
```

## Usage

Include and call with base directory to search up from for `.env`.

```js
import dotenv from "@elricb/dotenv-config";
dotenv.config(__dirname);
```


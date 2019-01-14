# Quick Started

A short guide to help user get started in using the library.

You may also describe the features or design of the library briefly.

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

``` bash
$ npm install yoanmarchal/v-invoice --save
$ npm install vue2-filters --save
```

or Yarn:

``` bash
$ yarn add yoanmarchal/v-invoice
```

Then register `v-invoice` components and directives all at once in your app's entry:

``` js
// main.js
import Vue from 'vue'
import * as v-invoice from 'v-invoice'

Vue.use(v-invoice)
```

## i18n

How to configure the library to use different language.
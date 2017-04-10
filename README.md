<div align="center">
  <h1>choo-asyncify</h1>
  <b>make choo events asychronous</b>
</div>

----

<div align="center">
  <a href="https://github.com/yoshuawuyts/choo" alt="works with choo v5">
    <img src="https://img.shields.io/badge/works%20with-choo%20v5-ff69b4.svg?style=flat-square"/>
  </a>
  <a href="https://npmjs.com/package/choo-asyncify" alt="npm package">
    <img src="https://img.shields.io/npm/v/choo-asyncify.svg?style=flat-square"/>
  </a>
</div>

<div align="center">
:steam_locomotive::train::train::train::train::train: (<code>choo</code>) + :train: (<code>choo-asyncify</code>)
</div>

----

[choo](https://github.com/yoshuawuyts/choo) is a super lightweight, well engineered frontend framework.

`choo` v5 is event-based. Where previous versions would asynchronously send messages from views to effects, v5 uses [nanobus](https://github.com/yoshuawuyts/nanobus) to send synchronous events.
Depending on how you structure your app, this might cause blocking of UI updates.

`choo-asyncify` monkey-patches the `nanobus` instance passed around by `choo` so that every event is non-blocking.
Specifically, each `emit` call is wrapped in a `setImmediate`, or if `setImmediate` isn't available, in a `setTimeout(fn, 0)`.

## install

```bash
npm install --save choo-asyncify
```

## usage

Just pass `choo-asyncify` to `choo().use()`:

```js
var app = require('choo')()

app.use(require('choo-asyncify'))
```

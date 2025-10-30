# WaBails Wrapper (safe demo)

Wrapper package that re-exports `@whiskeysockets/baileys` and adds safe helper utilities.

## Install
```bash
npm install github:Xource-dev/WaBails
```

## Usage
```js
const wabails = require('@xource/wabails');
const { default: makeWASocket } = wabails;

console.log(wabails.helpers.generatePairingCode()); // XOUR-XOUR
```

> This library is a safe wrapper and does not modify WhatsApp protocol.

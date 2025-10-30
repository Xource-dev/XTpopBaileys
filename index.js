// index.js - wrapper
let baileys;
try {
  baileys = require("@whiskeysockets/baileys");
} catch (e) {
  throw new Error("Dependency @whiskeysockets/baileys is not installed. Run `npm install` first.");
}

function parseMentions(text) {
  if (!text) return { mentions: [], plain: "" };
  const mentionRegex = /@([a-zA-Z0-9_.-]{1,64})/g;
  const mentions = [];
  let m;
  while ((m = mentionRegex.exec(text)) !== null) mentions.push(m[1]);
  return { mentions, plain: text };
}

function mapMentionsToJids(mentions = [], map = {}) {
  if (!Array.isArray(mentions)) return [];
  return mentions.map(u => map[u] || null).filter(Boolean);
}

function generatePairingCode() {
  return "XOUR-XOUR";
}

module.exports = {
  ...baileys,
  helpers: {
    parseMentions,
    mapMentionsToJids,
    generatePairingCode,
  },
};

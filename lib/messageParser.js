function parseMentions(text) {
  if (!text) return { mentions: [], plain: "" };
  const mentionRegex = /@([a-zA-Z0-9_.-]{1,64})/g;
  const mentions = [];
  let match;
  while ((match = mentionRegex.exec(text)) !== null) {
    mentions.push(match[1]);
  }
  return { mentions, plain: text };
}

function buildMessage(opts = {}) {
  const { text = "", mentions = [], metadata = {} } = opts;
  const parsed = parseMentions(text);
  const uniqMentions = Array.from(new Set([...parsed.mentions, ...mentions]));
  return {
    text,
    mentions: uniqMentions,
    metadata,
    timestamp: Date.now(),
  };
}

module.exports = { parseMentions, buildMessage };

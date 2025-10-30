const wabails = require('../index');

console.log('pairing:', wabails.helpers.generatePairingCode());

const txt = 'Halo @alice dan @bob, test.';
console.log('parseMentions:', wabails.helpers.parseMentions(txt));

console.log('mapToJids:', wabails.helpers.mapMentionsToJids(['alice','bob'], {
  alice: '62812xxxx@s.whatsapp.net',
  bob: '62813yyyy@s.whatsapp.net'
}));

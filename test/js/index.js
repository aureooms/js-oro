var recquire_t = require('recquire');

var recquire = recquire_t('oro-test', 'index.js', false, false);

recquire(__dirname + '/src/', module.exports, 0);
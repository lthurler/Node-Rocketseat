const getFlagValue = require('./desafio1-flag');

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greating')}`);
require('dotenv').load({ path:'/etc/email.env' });

const email = require('../../lib');

const props = {
  token: '8wc78gwc78gsd7g',
  url: 'http://localhost:3600/reset',
}

if (!process.env.TEST_FROM || !process.env.TEST_TO || !process.env.TEST_SUBJECT || !process.env.TEST_TEMPLATE) {
	console.error(`To test locally, please define the following environment variables:
	TEST_FROM: sender's email address
	TEST_TO: destination email address
	TEST_SUBJECT: subject line
	TEST_TEMPLATE: which template to use
Note: this will send a live email (assuming you've set up your SMTP correctly)!
	`);
	process.exit();
}

console.log(email.prepare({
  from:     process.env.TEST_FROM,
  to:       process.env.TEST_TO,
  subject:  process.env.TEST_SUBJECT,
  template: process.env.TEST_TEMPLATE,
  props,
}));
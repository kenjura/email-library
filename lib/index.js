require('./helper/versionCheck')();

const getSMTPConfig   = require('./helper/getSMTPConfig');
const getTemplate     = require('./helper/getTemplate');
const nodemailer      = require('nodemailer');
const safeMode        = require('./helper/safeMode');
const util            = require('util');
const validateMessage = require('./helper/validateMessage');

module.exports = { getTemplate, prepare, send }

function prepare(msg) {
  const props = Object.assign({}, getDefaultProps(), msg.props);
  if (msg.template) msg.html = getTemplate(msg.template, props);
  if (!msg.html && !msg.text) throw new Error('email-library > send > message has neither a "template" nor "html" field, so there is no body to send.');

  try {
    validateMessage(msg);
  } catch(err) {
    console.error('email-library > send > unable to send message, as it did not pass validation.');
    throw err;
  }

  safeMode.apply(msg);

  return msg;
}

async function send(msg) {
  console.log('email > sending an email with args:', msg);
  if (msg.fail) throw new Error('failed to send email');

  let transporter = nodemailer.createTransport(getSMTPConfig());
  const success = await util.promisify(transporter.verify)();
  if (!success) throw new Error('email-library > unable to connect to SMTP server.');

  prepare(msg);

  const result = await transporter.sendMail(msg);
  console.log({ result });
}


function getDefaultProps() {
  return {
    title: process.env.EMAIL_TEMPLATE_TITLE,
    copyright: process.env.EMAIL_TEMPLATE_COPYRIGHT,
    address: process.env.EMAIL_TEMPLATE_ADDRESS,
  }
}
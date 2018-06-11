module.exports.apply = function(message) {
  if (!process.env.EMAIL_MODE) console.warning('email-library > warning > process.env.EMAIL_MODE is not set! Defaulting to safe mode.');
  if (!process.env.EMAIL_SAFEDOMAIN) {
  	console.error('email-library > warning > process.env.EMAIL_SAFEMODE is not set! Shutting down...');
  	process.exit();
  }
  const isSafeMode = process.env.EMAIL_MODE !== 'production';
  const safeDomain = process.env.EMAIL_SAFEDOMAIN;

  if (!isSafeMode) return;

  message.to = message.to.split(',').filter( addr => addr.includes(`@${safeDomain}`) );
  message.subject += ' [sent in safe mode]';

  return message;
}
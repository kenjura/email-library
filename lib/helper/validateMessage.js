module.exports = function(message) {
  const errors = [];
  if (!message.from) message.from = process.env.EMAIL_FROM;
  if (!message.from) errors.push('No "from" address specified, and default value not found in process.env.EMAIL_FROM');
  if (!message.to) errors.push('No "to" address(es) specified. This email is not going anywhere.');
  if (Array.isArray(message.to)) message.to = message.to.join(',');
  if (!message.subject) message.subject = process.env.EMAIL_SUBJECT;
  if (!message.subject) errors.push('No "subject" provided, and default value was not found in process.env.EMAIL_SUBJECT');
  if (!message.html && !message.text) errors.push('No "html" or "text" field. This email has no body.');
  if (errors.length) throw new Error(`email-library > validateMessage > message is not valid:\n${errors.join('\n')}`);
  else return true;
}

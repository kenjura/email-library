module.exports = function() {
  if (!process.env.SMTP_HOST) throw new Error('Required environment variable SMTP_HOST is not present.');
  if (!process.env.SMTP_PORT) throw new Error('Required environment variable SMTP_PORT is not present.');
  if (!process.env.SMTP_USER) throw new Error('Required environment variable SMTP_USER is not present.');
  if (!process.env.SMTP_PASS) throw new Error('Required environment variable SMTP_PASS is not present.');

  return {
    pool: true,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
  };
}
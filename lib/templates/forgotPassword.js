const layout = require('./emailLayout');

module.exports = function(props) {
  if (!props.url) throw new Error('email-library > forgotPassword > required prop "url" is not present. This field contains the complete, absolute URL of the reset link, minus the token and its preceding slash.');
  if (!props.token) throw new Error('email-library > forgotPassword > required prop "token" is not present. This should contain the token generated for the user to reset their password.');
  const url = `${props.url}/${props.token}`;
  return layout({
    children: `
      <p>A request has been received to reset the password on your account.</p>
      <p>If this request was made by you, please <a href="${url}">click here</a> to reset your password. </p>
      <p>If you did not authorize this request, please disregard. Your account information has not been changed.</p>`
  });
}





/* 
<table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0 auto; padding: 0; width: 570px;" bgcolor="#FFFFFF">
                      
                      <tr>
                        <td class="content-cell" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 35px; word-break: break-word;">
                          <h1 style="box-sizing: border-box; color: #2F3133; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 19px; font-weight: bold; margin-top: 0;" align="left">Hi {{name}},</h1>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left">You recently requested to reset your password. Use the button below to reset it. <strong style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">This password reset is only valid for the next 24 hours.</strong></p>
                          
                          <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 30px auto; padding: 0; text-align: center; width: 100%;">
                            <tr>
                              <td align="center" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                                
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                  <tr>
                                    <td align="center" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                                      <table border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                        <tr>
                                          <td style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                                            <a href="{{action_url}}" class="button button--green" target="_blank" style="-webkit-text-size-adjust: none; background: #22BC66; border-color: #22bc66; border-radius: 3px; border-style: solid; border-width: 10px 18px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); box-sizing: border-box; color: #FFF; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; text-decoration: none;">Reset your password</a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left">For security, this request was received from a {{operating_system}} device using {{browser_name}}. If you did not request a password reset, please ignore this email or <a href="{{support_url}}" style="box-sizing: border-box; color: #3869D4; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">contact support</a> if you have questions.</p>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left">Thanks,
                            <br />The ${props.title} Team</p>
                          
                          <table class="body-sub" style="border-top-color: #EDEFF2; border-top-style: solid; border-top-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin-top: 25px; padding-top: 25px;">
                            <tr>
                              <td style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                                <p class="sub" style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin-top: 0;" align="left">If you’re having trouble with the button above, copy and paste the URL below into your web browser.</p>
                                <p class="sub" style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin-top: 0;" align="left">{{action_url}}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    */

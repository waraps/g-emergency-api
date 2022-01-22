const path = require("path");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const {
  CLIENT_ID_GMAIL,
  CLIENT_SECRET_GMAIL,
  REDIRECT_URI_GMAIL,
  REFRESH_TOKEN_GMAIL,
} = require("../config");

const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(
  CLIENT_ID_GMAIL,
  CLIENT_SECRET_GMAIL,
  REDIRECT_URI_GMAIL
);

OAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN_GMAIL,
});

module.exports.sendMail = async function (info) {
  try {
    const ACCESS_TOKEN_GMAIL = await OAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "galenosclinica.vet@gmail.com",
        clientId: CLIENT_ID_GMAIL,
        clientSecret: CLIENT_SECRET_GMAIL,
        refreshToken: REFRESH_TOKEN_GMAIL,
        accessToken: ACCESS_TOKEN_GMAIL,
      },
    });

    const mailOptions = {
      from: "Galenos Emergencia <galenosclinica.vet@gmail.com>",
      to: "manuelmenesesg@gmail.com",
      subject: "Solicitud de Consulta de Emergencia",
      text: `Consulta de Emergencia Solicitada; Cliente: ; Tlf Cliente: ; Banco: ${info.bank}; Numero de Referencia: ${info.receiptId};`,
      html: generateTemplateEmail(info),
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

const generateTemplateEmail = (info) => {
  const date = new Date();
  const template = `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <style>
      table, td, div, h1, p {font-family: Arial, sans-serif;}
    </style>
  </head>
  <body style="margin:0;padding:0;">
    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
      <tr>
        <td align="center" style="padding:0;">
          <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
            <tr>
              <td align="center" style="padding:40px 0 30px 0;background:#514D67;">
                <img src="https://i.ibb.co/PxWP3tk/Logo-Galenos-Verde-Copy.png" alt="" width="180" style="height:auto;display:block;border:1px solid #fff;border-radius:50%;" />
              </td>
            </tr>
            <tr>
              <td style="padding:36px 30px 42px 30px;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                  <tr>
                    <td style="padding:0 0 36px 0;color:#153643;">
                      <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Consulta de Emergencia Solicitada</h1>
                      <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Se ha solicitado una consulta de emergencia a través de la plataforma <strong>Galenos Emergencia</strong>, por favor comuníquese lo más rápido posible con el cliente para evaluar al paciente.</p>
                      <h3>Datos de la solicitud</h3>
                      <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><strong>Cliente: </strong></p>
                      <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><strong>Tlf Cliente: </strong></p>
                      <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><strong>Banco: </strong> ${
                        info.bank
                      }</p>
                      <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><strong>Numero de Referencia: </strong> ${
                        info.receiptId
                      }</p>
                      <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="${path.join(
                        __dirname,
                        "../../",
                        info.receipt
                      )}" style="color:#847DC1;text-decoration:underline;">Comprobante de pago</a></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;background:#759876;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                  <tr>
                    <td style="padding:0;width:50%;" align="left">
                      <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                        Galenos Clínica Veterinaria &reg; ${date.getFullYear()}<br/>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;

  return template;
};

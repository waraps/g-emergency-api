const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const {
  CLIENT_ID_GMAIL,
  CLIENT_SECRET_GMAIL,
  REDIRECT_URI_GMAIL,
  REFRESH_TOKEN_GMAIL,
} = require("../config");

const OAuth2 = google.auth.OAuth2;

const CLIENT_ID = CLIENT_ID_GMAIL;
const CLIENT_SECRET = CLIENT_SECRET_GMAIL;
const REDIRECT_URI = REDIRECT_URI_GMAIL;
const REFRESH_TOKEN = REFRESH_TOKEN_GMAIL;

const OAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

module.exports.sendMail = async function () {
  try {
    const ACCESS_TOKEN = await OAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "galenosclinica.vet@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
    });

    const mailOptions = {
      from: "Galenos Emergencia <galenosclinica.vet@gmail.com>",
      to: "manuelmenesesg@gmail.com",
      subject: "Solicitud de Consulta de Emergencia",
      text: "Hello from gmail using API",
      html: "<h1>Hello from gmail using API</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

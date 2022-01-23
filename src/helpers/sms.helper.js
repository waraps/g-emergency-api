const {
  ACCOUNT_SID_TWILIO,
  AUTH_TOKEN_TWILIO,
  TWILIO_NUMBER_PHONE,
  NOTIFICATION_NUMBER_PHONE,
} = require("../config");

const twilio = require("twilio")(ACCOUNT_SID_TWILIO, AUTH_TOKEN_TWILIO);

module.exports.sendSMS = async function (info) {
  try {
    const smsBody = `Solicitud de Consulta de Emergencia\nCliente: ${info.fullname} Cedula: ${info.dni} Tlf: ${info.phone}\nDescripcion: ${info.description}\nPago: ${info.bank} Referencia #${info.receiptId}\nPor favor comuníquese lo más rápido posible con el cliente para evaluar al paciente.`;
    const response = await twilio.messages.create({
      to: NOTIFICATION_NUMBER_PHONE,
      from: TWILIO_NUMBER_PHONE,
      body: smsBody,
    });
    return response;
  } catch (error) {
    return error;
  }
};

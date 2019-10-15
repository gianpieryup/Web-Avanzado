// Enviar correos
//PAsos para esta cpnfiguracion
/*
1. Buscar en Google nodemailer
2. En la pagina estan los pasos a seguir | npm install nodemailer --save
3. Modificar algunas cosas
4. No olvidar tls
*/

const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(obj) {
try {
    let transporter = nodemailer.createTransport({
      //  host: 'smtp.gmail',//Elegir el host del Correo| ejemplo host:'smtp.gmail.com'
       // port: 587,
       // secure: false, // true for 465, false for other ports
       service:'gmail',  // [VERSION DEL COMPAÑERO| FUNCIONA]
       auth: {
            user: process.env.MAIL_USER, 
            pass:  process.env.MAIL_PASSWORD 
        },
        //Algo de seguridad,nesecario cambiar el true por defecto| si no rechaza y no te llega el correo
        tls :{
            rejectUnauthorized: false//Para el certiicasdp de seguridad
        }

    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.MAIL_USER, // Mi email
        to: obj.mail_u, // El mail del objeto(usuario) al que le quiero mandar un mail
        subject: '✔ Prueba de Envio ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: obj.html // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    return info.messageId;
} catch (error) {
    throw error;
}


}

//Aqui la ejecutaba nosotros la queremos uasr entonces la Exportamnos
module.exports ={
    sendEmail
}
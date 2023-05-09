const sgMail = require('@sendgrid/mail');

const sendMail = async (req,res)=>{
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const mail = req.params.mail
        console.log(process.env.sendgrid_api);
        const msg = {
            to: `${mail}`,
            from: 'habgrupoe@gmail.com', // Use the email address or domain you verified above
            subject: 'Email de confirmación de el grupo e',
            text: 'test mail que contendrá el link de activación de usuario ',
            html: '<strong>codigo confirmación </strong>',
          };
          //ES6
          sgMail
            .send(msg)
            .then(() => {}, error => {
              console.error(error);
          
              if (error.response) {
                console.error(error.response.body)
              }
            });
          //ES8
          (async () => {
            try {
              await sgMail.send(msg);
            } catch (error) {
              console.error(error);
          
              if (error.response) {
                console.error(error.response.body)
              }
            }
          })();
    } catch (error) {
        console.log(error)
    }
   
}
module.exports = sendMail
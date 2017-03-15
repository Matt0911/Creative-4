var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sayHello', function (req, res) {
  console.log(req.body);

  // var helper = require('sendgrid').mail;
  // var from_email = new helper.Email(req.body.sender);
  // var to_email = new helper.Email(req.body.receiver);
  // var subject = req.body.subject;
  // var content = new helper.Content('text/plain', req.body.message);
  // var mail = new helper.Mail(from_email, subject, to_email, content);
  //
  // var sg = require('sendgrid')('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');
  // var request = sg.emptyRequest({
  //   method: 'POST',
  //   path: '/v3/mail/send',
  //   body: mail.toJSON(),
  // });
  //
  // sg.API(request, function(error, response) {
  //   console.log(response.statusCode);
  //   console.log(response.body);
  //   console.log(response.headers);
  // });
  // var options = {
  //   auth: {
  //     api_user: 'creative4email',
  //     api_key: 'creative4'
  //   }
  // }
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'creative4email@gmail.com', // Your email id
            pass: 'creative4' // Your password
        }
    });

    // var transporter = nodemailer.createTransport({
    //   service: 'SendGrid',
    //   auth: {
    //     user: 'creative4email',
    //     pass: 'creative4'
    //   }
    // });

    var text = 'Hello from \n\n';

    var mailOptions = {
      from: req.body.sender, // sender address
      to: req.body.receiver, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message //, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.send("There was an error");
      }else{
          console.log('Message sent: ' + info.response);
          res.send("Email was sent!");
      };
    });

});

module.exports = router;

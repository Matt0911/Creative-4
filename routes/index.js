var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sayHello', function (req, res) {
  var options = {
    auth: {
      api_user: 'creative4email',
      api_key: 'creative4'
    }
  }
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
      from: 'mattmanhardt@gmail.com', // sender address
      to: 'matt0911@byu.edu', // list of receivers
      subject: 'Email Example', // Subject line
      text: text //, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      };
    });

    res.send("Email was sent!");
});

module.exports = router;

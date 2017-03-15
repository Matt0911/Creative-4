function clearFunction ()
{
	alert ("Entered email.js clearFunction");


	var sender = document.getElementById ("from");
	var receiver = document.getElementById ("to");

	var subject = document.getElementById ("subject");
	var message = document.getElementById ("message");

	sender.value = "";
	receiver.value = "";
	subject.value = "";
	message.value = "";
}


function sendFunction ()
{
	var sender = document.getElementById ("from");
	var receiver = document.getElementById ("to");

	var subject = document.getElementById ("subject");
	var message = document.getElementById ("message");

	
	var json = {sender:sender, receiver:receiver, subject:subject, message:message};

	
	var posting = $.post ("/sayHello", json);

	posting.done (function (data) {
		alert ("Email Successful");
	});

}

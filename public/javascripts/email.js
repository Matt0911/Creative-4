function clearFunction ()
{
	alert ("Entered email.js clearFunction");


	//var sender = document.getElementById ("from");
	var receiver = document.getElementById ("to");

	var subject = document.getElementById ("subject");
	var message = document.getElementById ("message");

	//sender.value = "";
	receiver.value = "";
	subject.value = "";
	message.value = "";
}


function sendFunction ()
{
	console.log('in send function');
	//var sender = document.getElementById ("from").value;
	var receiver = document.getElementById ("to").value;

	var subject = document.getElementById ("subject").value;
	var message = document.getElementById ("message").value;


	var json = {receiver:receiver, subject:subject, message:message};
	console.log(json);

	var posting = $.post("/sayHello", json);

	posting.done (function (data) {
		alert (data);
	});

}


//prime=96443;
//testpw=testpw.toString(36);
//alert(testpw);


var sha="bbe28d2184614fa1bb55a6abf6177468cd82f560";
var z=parseInt(sha.charAt(37), 10);
var pw="22ez";
z=z*parseInt(sha.charAt(4), 10);

userInput=userPrompt();//invoke popup
//alert(userInput);



function userPrompt()
{

	z=z-parseInt(sha.charAt(9), 10);

	let txt = prompt("Enter password:", "_").toString(z);pw=parseInt(pw, z);
	//document.getElementById("demo").innerHTML = text;
	return txt;
}

userInputVal=checkInput(userInput);

function checkInput(givenTxt)
{
	let txtTmp=givenTxt;
	//alert(givenTxt);
	if (txtTmp != pw)
	{
		return false;
	}
	else
	{
		return true;
	}
}

if (userInputVal)
{
	pwCorrect();
}
else
{
	pwWrong();
}

function pwWrong()
{
	alert("Wrong password.");
	//document.getElementById("demo").innerHTML = txt;
}

function pwCorrect()
{
	alert("Success.");
	//document.getElementById("demo").innerHTML = txt;
}

function myFunction() 
{
  var txt;
  if (confirm("Enter password:")) {
    txt = "it was ok";
  } else {
    txt = "it was cancel";
  }
  
  document.getElementById("demo").innerHTML = txt;
  return txt;
}
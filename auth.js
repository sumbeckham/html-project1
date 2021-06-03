function login(form)
{
	if(form.username.value=="bebroo"&&form.pass.value=="123")
	{
		alert("succesfully logged in ");
		window.open("servies.html","_self");
	}
	else
	{
		alert("wrong credentials !!!!");
	}
}
function askQuestions(){


		var firstName = prompt('What is your First Name?');
		var lastName = prompt('What is your last name?');
		var userName= firstName + ' ' + lastName

		{console.log(userName)}


		//The below adds notes to the console. making whatever is entered into lowercase to ensure match

		if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly'){
			console.log('Greetings, General!');
		}


		var userAge =prompt('How old are you?');
		userAge = parseInt(userAge);
		if (userAge >= 18){
			console.log('user is an adult')}
		else if (userAge >=13){
			console.log('user is a teen')
		}
		else if (userAge<=13){
			console.log ('go away child')
		}


		 var favColour = prompt('What is your favourite colour?').toLowerCase();
		 if (favColour=='red' ||
		 	favColour=='blue'||
		 	favColour=='green'||
		 	favColour=='yellow'){
		 	$('h1').css('color',favColour);
 }
}


$(function(){


	//when the page loads - hide all content

	$('h3').next().hide();

	//when the user clicks an h3
	$('h3').on('click', function(){

			//toggle the next element
			$(this).next().slideToggle(500);


	$('img').on('click', askQuestions);
	


	});









});
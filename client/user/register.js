Template.register.events({
    "submit form": function(e, template) {
		e.preventDefault();


		var user = {
			username: $('input[name="username"]').val(),
			email: $('input[name="email"]').val(),
			password: $('input[name="password"]').val(),
			firstname : $('input[name="firstname"]').val(),
			lastname : $('input[name="lastname"]').val(),
			chief : $('input[name="chief"]').val()
		};

		if($('input[name="password"]').val()===$('input[name="confirmedPassword"]').val()){
			Accounts.createUser(user, function(err) { // Mais quelle est donc cette méthode mystère ?...
				if (err) {
					alert(err.reason)
				} else {
					Router.go('home'); // Ceci est une redirection depuis un event/helper, elle est basée sur le nom de la route
				}
			});
		}else{
			alert('reconfirmer password');
		}
		
	}
});
Accounts.onCreateUser(function (options, user) {
	user.firstname = options.firstname;
	user.lastname = options.lastname;
	user.chief = options.chief;
	return user;
});
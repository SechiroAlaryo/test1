Posts.before.insert(function(userId,post){
	post.phase = 10;
	post.valid = "non décidé";
});

Posts.after.insert(function(userId,post){
	Email.send({
		from:'pierre.schneegans@orange.com',
		to:'pierre.schneegans@orange.com',
		subject:'Nouveau post',
		text:'un post a été créé par '+ post.author +'.'
	});
});

Posts.before.update(function(userId, post, fieldNames, modifier){
	if(modifier.$set.valid != null){
		modifier.$set.phase = 20;
	}
});

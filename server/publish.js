// le nom "null" permet à tout utilisateur d'obtenir ces informations
Meteor.publish(null, function () {
    return Meteor.users.find(
    	{_id: this.userId},
    	{fields:{'firstname':1,'lastname':1,'chief':1}}
    );
});

Meteor.publish("ownPosts",function(username){
	return Posts.find(
		{author: username},
		{fields:{title:1, author:1, validator:1, createdAt:1,phase:1}},
		{sort:{createdAt:-1}}
		);
});

Meteor.publish("otherPosts", function(validator){
	return Posts.find(
		{validator: validator},
		{fields:{title:1, author:1, validator:1, createdAt:1,phase:1}},
		{sort:{createdAt:-1}}
		);
});

Meteor.publish("postId", function(id){
	var name = Meteor.users.findOne({_id:this.userId}).username;
	var post = Posts.findOne({_id: id},{fields:{author:1, validator:1}});
	if(name === post.author){
		return Posts.find(
			{_id: id},
			{fields:{title:1, author:1, validator:1, createdAt:1,phase:1,content:1,commentAuthor:1}}
			);
	}
	else if(name === post.validator){
		return Posts.find(
			{_id: id},
			{fields:{title:1, author:1, validator:1, createdAt:1,phase:1,valid:1,content:1,commentValidator:1}}
			);
	}
	
});

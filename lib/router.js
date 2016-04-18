Router.configure({
	layoutTemplate:"layout"
});

//router d'accueil:
Router.route('/',{
	name:'home'
});

//router pour l'utilisateur:
Router.route('/signup',{
	name:'register'
});
Router.route('/signin',{
	name:'login'
});
Router.route('/compte',{
	//il n'y a pas besoin de souscrire à une collection:elle est enregistrée sous null
	name:'compte'/*,
	waitOn: function() {
		return Meteor.subscribe('user');
  	}*/
});

//router pour les différents posts:
Router.route('/newPost',{
	name:'newPost'
});

Router.route('/mesPosts',{
	name:'mesPosts',
    data: function(){
		var posts = Posts.find();
		
		return {
			mesposts: posts
		};
	},
	waitOn: function(){
		return Meteor.subscribe('ownPosts',Meteor.user().username);
	}
});

Router.route('superviseurPosts',{
	name:'superviseurPosts',
    data: function(){
		var posts = Posts.find();
		
		return {
			otherposts: posts
		};
	},
	waitOn: function(){
		return Meteor.subscribe('otherPosts',Meteor.user().username);
	}
});

Router.route('/postId/:_id', {
    name: "postId",
    data: function(){
		return Posts.findOne();
	},
    waitOn: function(){
		return Meteor.subscribe("postId",this.params._id);
	}
});

Router.route('/postId/:_id/edit', {
    name: "postIdEdit",
    data: function(){
		return Posts.findOne();
	},
    waitOn: function(){
		return Meteor.subscribe("postId",this.params._id);
	}
});

//permet de rediriger si utilisateur non-identifié
Router.onBeforeAction(function() {

    if (!Meteor.userId()) { // Si l'utilisateur n'est pas connecté, on lui affiche le formulaire de login
		this.render("home");
	} else {
		this.next(); // Sinon, la requête continue normalement
	}
},
{
	except: [
		"login", // Dans tous les cas, la page de login doit être accessible
		"register",
		"home"
	]
});

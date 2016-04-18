Template.postIdEdit.helpers({
	authorTrue() {
		if(this.author == Meteor.user().username){
			return true;
		}
		return false;
	},

	validatorTrue(){
		if(this.validator == Meteor.user().username){
			return true;
		}
		return false;
	}
});


Template.postIdEdit.events({
  	'submit form': function(e) {
    	e.preventDefault();

    	if(this.author == Meteor.user().username){
    		var commentAuthor = $('textarea[name="commentAuthor"]').val();

    		Posts.update(
    	  		this._id, 
    	  		{$set:{'commentAuthor':commentAuthor}},
    	    	function(error) {
    	  			if (error) {
    	    			alert(error.reason);
    	  			}
                    else{
                        Router.go('mesPosts')
                    }
    			}
    		)
    	}
    	else if(this.validator == Meteor.user().username){
    		var content = $('textarea[name="contenu"]').val();
    		var commentValidator = $('textarea[name="commentValidator"]').val();
    		var valid = $("input[name='valid']:checked").val();

    		Posts.update(
    	  		this._id, 
    	  		{$set:{'content':content,'commentValidator':commentValidator,'valid':valid}},
    	    	function(error) {
    	  			if (error) {
    	    			alert(error.reason);
    	  			}
                    else{
                        Router.go('superviseurPosts')
                    }
   		 		}
    		)
    	}
  	}
});
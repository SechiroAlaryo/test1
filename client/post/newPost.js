/*
Template.newPost.events({
    'submit form': function(e){
		e.preventDefault();
		
		var title = $("input[name='title']").val();
		var content = $("textarea[name='content']").val();
		
		var post = {
				title: title,
				content: content
		}
debugger
        Posts.insert(post, function(err, id){
			if(err){
				alert(err.reason)
			}
			
		});	
	},
	"onSuccess": function(){
		$("form input, form textarea").val("");
	}
});
*/
Template.newPost.events({
    'submit form': function(e){
		e.preventDefault();
		
		var title = $("input[name='titre']").val();
		var content = $("textarea[name='contenu']").val();
		
		var post = {
				title: title,
				content: content
		}
        
        Posts.insert(post, function(err, id){
			if(err){
				alert(err.reason)
			}
			else{
				$("form input, form textarea").val("");
			}
		});
	}
});